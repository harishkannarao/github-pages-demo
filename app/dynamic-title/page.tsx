'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)

    return params.toString()
  }

  function updateTitle(value: string) {
    router.push(pathname + '?' + createQueryString('title', value))
  }

  return (
    <div className='text-center'>
      <label>
        First name:
        <input
          value={searchParams.get('title')}
          onChange={e => updateTitle(e.target.value)}
        />
      </label>
    </div>
  );
}