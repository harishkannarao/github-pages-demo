import { Metadata } from 'next';
import { homePageMetadata } from './metadata';

export const metadata: Metadata = homePageMetadata;

export default function HomePage() {
  return (
    <>
      <div className='text-center'>
        <h1>
          <div className='description'>Hello, Next.js!</div>
        </h1>
      </div>
    </>
  );
}