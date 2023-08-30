import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../../../app/dynamic-title/page'
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
    });

    it('set the title search param on input change', async () => {
        usePathname.mockReturnValue('example');
        mockToString.mockReturnValue('user=abc&query=xyz');
        render(
            <Page />
        )
        fireEvent.change(screen.queryByTestId('new-title'), {target: {value: 'hello'}});
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz&title=hello');
    })

    it('deletes the title search param for blank input', async () => {
        usePathname.mockReturnValue('example');
        mockGet.mockReturnValue('existing');
        mockToString.mockReturnValue('user=abc&query=xyz&title=existing');
        render(
            <Page />
        )
        fireEvent.change(screen.queryByTestId('new-title'), {target: {value: ''}});
        expect(mockGet.mock.calls).toHaveLength(1);
        expect(mockGet.mock.calls[0][0]).toBe('title');
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toBe('example?user=abc&query=xyz');
    })
})

