import '@testing-library/jest-dom'
import { Title } from '../../../components/title/title'
import { render, screen } from '@testing-library/react'
import { useParams } from 'next/navigation';

const mockGet = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useSearchParams: jest.fn(() => ({
            get: mockGet
        })),
        useParams: jest.fn()
    }
})

let contextTitle = undefined;
const setContextTitle = jest.fn();
jest.mock('../../../components/title/title_context', () => {
    return {
        useTitleContext: jest.fn(() => ({
            title: contextTitle,
            setTitle: setContextTitle
        }))
    }
})

describe('time', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        contextTitle = undefined;
        mockGet.mockReturnValue(undefined);
        useParams.mockReturnValue(undefined);
    });

    it('renders default title when title not in query and no canonical name', async () => {
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

    it('renders default title when canonical name is blank', async () => {
        useParams.mockReturnValue({ canonicalName: ''})
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

    it('renders title from canonical name', async () => {
        useParams.mockReturnValue({ canonicalName: 'xyz'})
        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('xyz');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
    })

    it('renders title from context', async () => {
        contextTitle = 'context title'

        render(
            <Title />
        )
        const pathName = screen.queryByTestId('title');
        expect(pathName.textContent).toBe('context title');

        expect(mockGet.mock.calls.length).toBe(1);
        expect(mockGet.mock.calls[0][0]).toBe('title123');
    })
})
