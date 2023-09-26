'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { defaultTitle } from '../metadata';

export default function TitlePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryTitle = getTitle(searchParams.get('title'));
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = defaultTitle;
    return () => {
      // clears the title when this component is unmounted
      document.title = defaultTitle;
    };
  }, []);

  useEffect(() => {
    if (title) {
      document.title = title;
    } else if (queryTitle) {
      document.title = queryTitle
    } else {
      document.title = defaultTitle;
    }
  }, [queryTitle, title]);

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

  function updateQueryTitle(value: string) {
    router.push(pathname + '?' + createQueryString('title', value));
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
            value={queryTitle}
            onChange={e => updateQueryTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Title through state:
          <input
            data-testid="new-title-context"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}