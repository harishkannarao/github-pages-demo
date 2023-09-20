import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TitlePage from '../../../app/dynamic-title/dynamic_title_page'
import { usePathname } from "next/navigation";

const mockPush = jest.fn();
const mockGet = jest.fn();
const mockToString = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useRouter: jest.fn(() => ({
            push: mockPush
        })),
        useSearchParams: jest.fn(() => ({
            get: mockGet,
            toString: mockToString
        })),
        usePathname: jest.fn()
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

describe('dynamic title page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        contextTitle = undefined;
        usePathname.mockReturnValue('default');
    });

    it('set the title search param on input change', async () => {
        usePathname.mockReturnValue('example');
        mockToString.mockReturnValue('user=abc&query=xyz');
        render(
            <TitlePage />
        )
        fireEvent.change(screen.queryByTestId('new-title-query'), {target: {value: 'hello'}});
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz&title=hello');
    })

    it('deletes the title search param for blank input', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('existing');
        mockToString.mockReturnValue('user=abc&query=xyz&title=existing');
        render(
            <TitlePage />
        )
        fireEvent.change(screen.queryByTestId('new-title-query'), {target: {value: ''}});
        expect(mockGet.mock.calls).toHaveLength(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz');
    })

    it('set the title context on input change', async () => {
        contextTitle = 'some context title';
        render(
            <TitlePage />
        )
        expect(screen.queryByTestId('new-title-context').value).toBe('some context title');
        fireEvent.change(screen.queryByTestId('new-title-context'), {target: {value: 'hello'}});
        expect(setContextTitle.mock.calls).toHaveLength(1);
        expect(setContextTitle.mock.calls[0][0]).toBe('hello');
    })
})

