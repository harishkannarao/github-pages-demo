import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasketContextProvider, useBasketContext } from '../../../components/basket/basket_context';
import { Basket } from '../../../components/basket/basket';
import { BasketAction } from '../../../components/basket/basket_action';


function createComponentWithBasketContext() {
    return (
        <BasketContextProvider>
            <Basket></Basket>
            <BasketAction></BasketAction>
        </BasketContextProvider>
    )
}

describe('BasketContext', () => {
    it('increase and decrease count', async () => {
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

    it('decrease does not reduce count below 0', async () => {
        render(
            createComponentWithBasketContext()
        )
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(screen.queryByTestId('basket-count').textContent).toBe('0');
    })
})