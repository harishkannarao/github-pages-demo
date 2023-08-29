'use client';

import { useSearchParams } from "next/navigation";

export function Title() {
    const searchParams = useSearchParams();
    const titleQuery = searchParams.get('title');
    const title = titleQuery ? titleQuery : 'My Sample Site';
    return (
        <title data-testid="title">{title}</title>
    )
}