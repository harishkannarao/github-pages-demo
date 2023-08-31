import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { usePathname } from "next/navigation";
import RootLayout from "../../app/layout"

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

describe('root layout', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        usePathname.mockReturnValue('/');
    });

    it('displays title', async () => {
        render(<RootLayout><div /></RootLayout>)
        expect(screen.queryByTestId('title').textContent).toBe('My Sample Site');
    })
})