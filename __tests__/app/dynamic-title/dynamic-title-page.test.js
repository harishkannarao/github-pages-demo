import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../../../app/dynamic-title/page'
import { usePathname } from "next/navigation";

const mockPush = jest.fn();
const mockGet = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useRouter: jest.fn(() => ({
            push: mockPush
        })),
        useSearchParams: jest.fn(() => ({
            get: mockGet
        })),
        usePathname: jest.fn()
    }
})

describe('dynamic title page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        usePathname.mockReturnValue('/default');
    });

    it('set the title search param on input change', async () => {
        usePathname.mockReturnValue('example');
        render(
            <Page />
        )
        fireEvent.change(screen.queryByTestId('new-title'), {target: {value: 'hello'}});
        expect(mockPush.mock.calls.length).toBe(1);
        expect(mockPush.mock.calls[0][0]).toMatch(/^example\?/);
        expect(mockPush.mock.calls[0][0]).toMatch(/title=hello$/);

        fireEvent.change(screen.queryByTestId('new-title'), {target: {value: ''}});
        expect(mockPush.mock.calls.length).toBe(2);
        expect(mockPush.mock.calls[1][0]).toMatch(/^example\?/);
        expect(mockPush.mock.calls[1][0]).not.toMatch(/title=/);
    })
})

