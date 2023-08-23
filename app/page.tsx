'use client';

import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';

export default function Page() {
  return (
    <div className='text-center'>
      <h1>
        <div className='description'>Hello, Next.js!</div>
      </h1>
      <h3>
        <div>
          <Link data-testid="time-link" href="/time">Time</Link>
          <h6><Badge pill bg="secondary">New</Badge></h6>
        </div>
      </h3>
    </div>

  );
}