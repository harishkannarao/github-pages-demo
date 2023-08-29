'use client';

import { useSearchParams } from "next/navigation";

export function Title() {
    const searchParams = useSearchParams();
    const title = searchParams.has('title') ? searchParams.get('title') : 'My Sample Site';
    return (
        <title data-testid="title">{title}</title>
    )
}