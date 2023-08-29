import '@testing-library/jest-dom'
import { Title } from '../../../components/title/title'
import { render, screen } from '@testing-library/react'

const mockHas = jest.fn();
const mockGet = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useSearchParams: jest.fn(() => ({
            has: mockHas,
            get: mockGet
        }))
    }
})

describe('time', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockHas.mockReturnValue(false);
        mockGet.mockReturnValue(undefined);
    });

    it('renders default title', async () => {
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('My Sample Site');

        expect(mockHas.mock.calls.length).toBe(1);
        expect(mockHas.mock.calls[0][0]).toBe('title');
    })

    it('renders title from search param', async () => {
        mockHas.mockReturnValue(true);
        mockGet.mockReturnValue('example')
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('example');

        expect(mockHas.mock.calls.length).toBe(1);
        expect(mockHas.mock.calls[0][0]).toBe('title');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
    })
})
