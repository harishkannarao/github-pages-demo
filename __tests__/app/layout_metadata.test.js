import { layoutMetadata } from '../../app/layout_metadata';

describe('Layout', () => {
    it('verify metadata', async () => {
        const result = layoutMetadata;
        expect(result.description).toBe('Demo site for showcasing github pages with next js and react');
        expect(result.keywords).toHaveLength(2);
        expect(result.keywords).toContain('next js');
        expect(result.keywords).toContain('react');
    })
})