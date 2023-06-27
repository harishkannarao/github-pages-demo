import Link from 'next/link';

export default function Page() {
  return (
    <h1>
      <div>Hello, Next.js!</div>
      <div>
        <Link href="/time">Time</Link>
      </div>
      </h1>
  );
}