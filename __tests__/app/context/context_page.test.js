import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ContextPage from '../../../app/context/context_page';
import { BasketContextProvider } from '../../../components/basket/basket_context';

function createComponentWithProviders() {
    return (
        <BasketContextProvider>
            <ContextPage></ContextPage>
        </BasketContextProvider>
    )
}

describe('Context Page', () => {
    it('increase and decrease basket count', async () => {
        render(
            createComponentWithProviders()
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
            createComponentWithProviders()
        )
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
    })
})