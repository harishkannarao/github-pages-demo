import { layoutMetadata, homePageMetadata } from '../../app/metadata';

describe('Layout', () => {
    it('verify layout metadata', async () => {
        const result = layoutMetadata;
        expect(result.description).toBe('Demo site for showcasing github pages with next js and react');
        expect(result.keywords).toHaveLength(2);
        expect(result.keywords).toContain('next js');
        expect(result.keywords).toContain('react');
        expect(result.title.template).toBe('%s | My Sample Site');
        expect(result.title.default).toBe('My Sample Site');
    })

    it('verify home page metadata', async () => {
        const result = homePageMetadata;
        expect(result.title).toBe('Home | My Sample Site');
    })
})