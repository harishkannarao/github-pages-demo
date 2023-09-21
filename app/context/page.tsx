import ContextPage from './context_page'
import { Metadata, ResolvingMetadata } from 'next'
import { generateMetadata as metadata, Props } from './context_metadata'

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return metadata({ params, searchParams }, parent);
}

export default function ContextPageWrapper() {
    return (
        <ContextPage></ContextPage>
    )
}