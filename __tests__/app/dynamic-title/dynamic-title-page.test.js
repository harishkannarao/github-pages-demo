import '@testing-library/jest-dom'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
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


describe('dynamic title page', () => {
    beforeEach(() => {

        jest.clearAllMocks();
        usePathname.mockReturnValue('default');
        mockGet.mockReturnValue(undefined);
        mockToString.mockReturnValue(undefined);
    });

    afterEach(() => {
        cleanup();
    })

    it('display default title', async () => {
        render(
            <TitlePage />
        )
        expect(global.window.document.title).toBe('My Sample Site');
    })

    it('display title from query', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('existing');
        mockToString.mockReturnValue('user=abc&query=xyz&title=existing');
        render(
            <TitlePage />
        )
        expect(global.window.document.title).toBe('existing');
        expect(screen.queryByTestId('new-title-query').value).toBe('existing');
    })

    it('display title from input when no title in query', async () => {
        render(
            <TitlePage />
        )
        expect(global.window.document.title).toBe('My Sample Site');
        expect(screen.queryByTestId('new-title-query').value).toBe('');

        fireEvent.change(screen.queryByTestId('new-title-context'), {target: {value: 'hello'}});
        expect(global.window.document.title).toBe('hello');
    })

    it('display title from input when title in query', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('existing');
        mockToString.mockReturnValue('user=abc&query=xyz&title=existing');

        render(
            <TitlePage />
        )
        expect(global.window.document.title).toBe('existing');
        expect(screen.queryByTestId('new-title-query').value).toBe('existing');

        fireEvent.change(screen.queryByTestId('new-title-context'), {target: {value: 'hello'}});
        expect(global.window.document.title).toBe('hello');

        fireEvent.change(screen.queryByTestId('new-title-context'), {target: {value: 'hello there'}});
        expect(global.window.document.title).toBe('hello there');
    })

    it('adds title in query on input change', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue(undefined);
        mockToString.mockReturnValue('user=abc&query=xyz');

        render(
            <TitlePage />
        )

        fireEvent.change(screen.queryByTestId('new-title-query'), {target: {value: 'hello'}});
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz&title=hello');
    })

    it('updates title in query on input change', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('hello');
        mockToString.mockReturnValue('user=abc&query=xyz&title=hello');

        render(
            <TitlePage />
        )

        fireEvent.change(screen.queryByTestId('new-title-query'), {target: {value: 'hello_there'}});
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz&title=hello_there');
    })

    it('deletes title in query on blank input', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('hello');
        mockToString.mockReturnValue('user=abc&query=xyz&title=hello');

        render(
            <TitlePage />
        )

        fireEvent.change(screen.queryByTestId('new-title-query'), {target: {value: ''}});
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz');
    })

    it('sets title to default on unmount', async () => {
        const { unmount } = render(
            <TitlePage />
        )
        expect(global.window.document.title).toBe('My Sample Site');
        expect(screen.queryByTestId('new-title-query').value).toBe('');

        fireEvent.change(screen.queryByTestId('new-title-context'), {target: {value: 'hello'}});
        expect(global.window.document.title).toBe('hello');

        unmount();
        expect(global.window.document.title).toBe('My Sample Site');
    })

})

