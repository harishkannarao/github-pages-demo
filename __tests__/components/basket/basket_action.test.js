import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasketAction } from '../../../components/basket/basket_action';

let mockCount = 0;
const mockSetCount = jest.fn();
const mockDoIncrease = jest.fn();
const mockDoDecrease = jest.fn();
jest.mock('../../../components/basket/basket_context', () => {
    return {
        useBasketContext: jest.fn(() => ({
            count: mockCount,
            setCount: mockSetCount,
            doIncrease: mockDoIncrease,
            doDecrease: mockDoDecrease
        }))
    }
})

describe('BasketAction', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockCount = 0;
    });

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
