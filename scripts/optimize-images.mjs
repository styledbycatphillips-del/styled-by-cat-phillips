import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMG_EXTS = /\.(png|jpe?g)$/i;

const projectRoot = process.cwd();
const defaultDir = path.join(projectRoot, "public");
const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : defaultDir;

const concurrency = Math.min((os.cpus()?.length || 4), 8);

function pLimit(n) {
  let active = 0;
  const queue = [];
  const next = () => {
    if (active >= n || queue.length === 0) return;
    const { fn, resolve, reject } = queue.shift();
    active++;
    fn()
      .then((v) => {
        active--; resolve(v); next();
      })
      .catch((e) => {
        active--; reject(e); next();
      });
  };
  return (fn) => new Promise((resolve, reject) => { queue.push({ fn, resolve, reject }); next(); });
}

const limit = pLimit(concurrency);

async function optimizeFile(fullPath) {
  try {
    const webpPath = fullPath.replace(IMG_EXTS, ".webp");
    const [srcStat, dstStat] = await Promise.all([
      fs.stat(fullPath),
      fs.stat(webpPath).catch(() => null),
    ]);

    if (dstStat && dstStat.mtimeMs >= srcStat.mtimeMs) {
      return; // up-to-date
    }

    const rel = path.relative(projectRoot, fullPath);
    console.log(`Optimizing: ${rel}`);

    const ext = path.extname(fullPath).toLowerCase();
    const webpOptions = ext === ".png"
      ? { quality: 82, alphaQuality: 90 }
      : { quality: 82 };

    await sharp(fullPath)
      .rotate()
      .resize({ width: 1920, fit: "inside", withoutEnlargement: true })
      .webp(webpOptions)
      .toFile(webpPath);

    console.log(`✓ Created: ${path.relative(projectRoot, webpPath)}`);
  } catch (err) {
    console.warn(`Skipping unsupported/bad image: ${path.relative(projectRoot, fullPath)} — ${err.message}`);
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const tasks = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      tasks.push(walk(full));
    } else if (IMG_EXTS.test(entry.name)) {
      tasks.push(limit(() => optimizeFile(full)));
    }
  }
  await Promise.all(tasks);
}

async function main() {
  try {
    const stat = await fs.stat(targetDir).catch(() => null);
    if (!stat || !stat.isDirectory()) {
      console.error(`Target directory not found: ${targetDir}`);
      process.exitCode = 1;
      return;
    }
    await walk(targetDir);
    console.log("All images optimized.");
  } catch (err) {
    console.error("Error optimizing images:", err);
    process.exitCode = 1;
  }
}

main();
