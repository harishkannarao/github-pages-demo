import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasketAction } from '../../../components/basket/basket_action';

const mockDoIncrease = jest.fn();
const mockDoDecrease = jest.fn();
jest.mock('../../../components/basket/basket_context', () => {
    return {
        useBasketContext: jest.fn(() => ({
            doIncrease: mockDoIncrease,
            doDecrease: mockDoDecrease
        }))
    }
})

describe('BasketAction', () => {
    it('increase and decrease count', async () => {
        render(
            <BasketAction />
        )
        fireEvent.click(screen.queryByTestId('increase'));
        expect(mockDoIncrease.mock.calls).toHaveLength(1);
        fireEvent.click(screen.queryByTestId('increase'));
        expect(mockDoIncrease.mock.calls).toHaveLength(2);

        fireEvent.click(screen.queryByTestId('decrease'));
        expect(mockDoDecrease.mock.calls).toHaveLength(1);
        fireEvent.click(screen.queryByTestId('decrease'));
        expect(mockDoDecrease.mock.calls).toHaveLength(2);
    });
})
