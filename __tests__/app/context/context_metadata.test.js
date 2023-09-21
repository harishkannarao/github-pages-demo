import { generateMetadata } from '../../../app/context/context_metadata';

function createParams() {
    return {
        params: { id: undefined },
        searchParams: {}
    }
}

describe('Context metadata', () => {
    
    it('returns metadata with default keywords', async () => {
        const result = await generateMetadata(
            createParams(),
            Promise.resolve({})
        )
        expect(result.keywords).toHaveLength(2);
        expect(result.keywords).toContain('context');
        expect(result.keywords).toContain('provider');
    })

    it('returns metadata along with parent keywords', async () => {
        const result = await generateMetadata(
            createParams(),
            Promise.resolve({keywords: ['nextjs']})
        )
        expect(result.keywords).toHaveLength(3);
        expect(result.keywords).toContain('context');
        expect(result.keywords).toContain('provider');
        expect(result.keywords).toContain('nextjs');
    })
})