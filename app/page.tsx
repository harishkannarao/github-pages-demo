'use client';

import Badge from 'react-bootstrap/Badge';

export default function Page() {
  return (
    <>
      <div className='text-center'>
        <h1>
          <div className='description'>Hello, Next.js!</div>
        </h1>
        <h3>
          <div>
            <a data-testid="time-link" href="/time">Time</a>
            <br />
            <a data-testid="dynamic-title-link" href="/dynamic-title">Dynamic Title</a>
            <br />
            <h6><Badge pill bg="secondary">New</Badge></h6>
          </div>
        </h3>
      </div>
    </>
  );
}