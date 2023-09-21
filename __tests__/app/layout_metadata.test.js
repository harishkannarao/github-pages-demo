import { layoutMetadata } from '../../app/layout_metadata';

describe('Layout', () => {
    it('verify metadata', async () => {
        const result = layoutMetadata;
        expect(result.description).toBe('Demo site for showcasing github pages with next js and react');
    })
})