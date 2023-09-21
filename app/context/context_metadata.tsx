import { Metadata, ResolvingMetadata } from 'next'

export type Props = {
    params: { id: string | undefined }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // optionally access and extend (rather than replace) parent metadata
    const parentKeywords = (await parent).keywords || []
    const resolvedKeywords = parentKeywords.concat(['context', 'provider']);

    return {
        keywords: resolvedKeywords,
    }
}