import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../../../app/dynamic-route/[productId]/[canonicalName]/page'

describe('dynamic route page', () => {
    it('displays product id and canonical name', async () => {
        const params = {
            productId: 'abc',
            canonicalName: 'xyz'
        }
        render(
            <Page params={params} />
        )
        expect(screen.queryByTestId("productId").textContent).toBe('abc');
        expect(screen.queryByTestId("canonicalName").textContent).toBe('xyz');
    })
});