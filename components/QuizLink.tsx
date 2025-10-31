'use client';

import { useSearchParams } from 'next/navigation';

export default function QuizLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const params = useSearchParams();
  const qs = params.toString();
  const href = qs ? `/quiz?${qs}` : '/quiz';
  
  return <a href={href} className={className}>{children}</a>;
}