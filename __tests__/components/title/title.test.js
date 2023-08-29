import '@testing-library/jest-dom'
import { Title } from '../../../components/title/title'
import { render, screen } from '@testing-library/react'

const mockGet = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useSearchParams: jest.fn(() => ({
            get: mockGet
        }))
    }
})

describe('time', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockGet.mockReturnValue(undefined);
    });

    it('renders default title when title not in query', async () => {
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('My Sample Site');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
    })

    it('renders default title when title in query is blank', async () => {
        mockGet.mockReturnValue('')
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('My Sample Site');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
    })

    it('renders title from search param', async () => {
        mockGet.mockReturnValue('example')
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('example');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
    })
})
