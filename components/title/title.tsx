'use client';

import { useSearchParams, useParams } from "next/navigation";

export function Title() {
    const searchParams = useSearchParams();
    const titleQuery = searchParams.get('title');
    const params = useParams();
    const canonicalName = params ? params.canonicalName : undefined;

    function getTitle() {
        if (canonicalName) {
            return canonicalName;
        } else if (titleQuery) {
            return titleQuery;
        } else {
            return 'My Sample Site';
        }
    }
    
    return (
        <title data-testid="title">{getTitle()}</title>
    )
}