'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTitleContext } from '../../components/title/title_context';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const titleContext = useTitleContext();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(name, value)
    } else {
      params.delete(name)
    }
    return params.toString()
  }

  function updateTitle(value: string) {
    router.push(pathname + '?' + createQueryString('title', value))
  }

  function getTitle(value: string | null | undefined) {
    return value ? value : '';
  }

  return (
    <div className='text-center'>
      <div>
        <label>
          Title through Query:
          <input
            data-testid="new-title-query"
            value={getTitle(searchParams.get('title'))}
            onChange={e => updateTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Title through Context:
          <input
            data-testid="new-title-context"
            value={getTitle(titleContext.title)}
            onChange={e => titleContext.setTitle(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}