import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasketContextProvider } from '../../../components/basket/basket_context';
import Page from '../../../app/context/page';


function createComponentWithBasketContext() {
    return (
        <BasketContextProvider>
            <Page></Page>
        </BasketContextProvider>
    )
}

describe('Context Page', () => {
    it('increase and decrease basket count', async () => {
        render(
            createComponentWithBasketContext()
        )
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
        fireEvent.click(screen.queryByTestId('increase'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('1');
        fireEvent.click(screen.queryByTestId('increase'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('2');
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('1');
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
    })

    it('decrease does not reduce basket count below 0', async () => {
        render(
            createComponentWithBasketContext()
        )
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
    })
})