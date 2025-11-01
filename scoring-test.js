// Authority Index™ Scoring Validation Test

function calculateScore(channelsCount, hasMatrix, publishesMonthly, complexity) {
    let score = 10; // Base
    score += Math.min(channelsCount * 5, 20); // +5 per channel, max +20
    score += hasMatrix ? 30 : 0; // +30 if matrix exists
    score += publishesMonthly ? 30 : 0; // +30 if publishes monthly
    score += (complexity === '2' || complexity === '3') ? 10 : 0; // +10 if complexity >= 2
    return score;
}

function getBand(score) {
    if (score < 35) return 'Emerging';
    if (score <= 69) return 'Practicing';
    return 'Consistent';
}

// Test cases from the specification
const testCases = [
    // [channels_count, has_matrix, publishes_monthly, complexity, expected_score, expected_band, description]
    [0, false, false, '1', 10, 'Emerging', 'Email only'],
    [1, false, false, '1', 15, 'Emerging', '1 channel, no matrix, no leadership'],
    [3, true, false, '1', 55, 'Practicing', '3 channels + matrix'],
    [3, true, false, '2', 65, 'Practicing', '3 channels + matrix + complexity 2'],
    [4, true, true, '2', 100, 'Consistent', '4 channels + matrix + leadership + complexity 2'],
    [5, true, true, '3', 100, 'Consistent', '5 channels capped at +20'],
];

console.log('Authority Index™ Scoring Validation');
console.log('='.repeat(50));

testCases.forEach(([channels, matrix, publishing, complexity, expectedScore, expectedBand, desc]) => {
    const actualScore = calculateScore(channels, matrix, publishing, complexity);
    const actualBand = getBand(actualScore);
    
    const status = (actualScore === expectedScore && actualBand === expectedBand) ? '✅ PASS' : '❌ FAIL';
    
    console.log(`${status} ${desc}`);
    console.log(`   Channels: ${channels}, Matrix: ${matrix}, Publishing: ${publishing}, Complexity: ${complexity}`);
    console.log(`   Expected: ${expectedScore} → ${expectedBand}`);
    console.log(`   Actual:   ${actualScore} → ${actualBand}`);
    console.log('');
});

console.log('Scoring Formula Breakdown:');
console.log('Base: +10');
console.log('Channels: +5 each (max +20)');
console.log('Matrix: +30 if Yes');
console.log('Leadership: +30 if Yes');
console.log('Complexity: +10 if 2 or 3');
console.log('\nBands:');
console.log('Emerging: < 35');
console.log('Practicing: 35-69');
console.log('Consistent: ≥ 70');