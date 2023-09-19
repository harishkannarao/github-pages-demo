import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeChanger } from '../../../components/theme/theme_changer';


let currentTheme;
const mockSetTheme = jest.fn();
jest.mock('next-themes', () => {
    return {
        useTheme: jest.fn(() => ({
            theme: currentTheme,
            setTheme: mockSetTheme
        }))
    }
})

describe('theme changer', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        currentTheme = 'system';
    });

    it('displays current selected theme', async () => {
        currentTheme = 'light';
        render(
            < ThemeChanger />
        )
        expect(screen.queryByTestId('theme-changer-light').selected).toBeTruthy();
    })

    it('changes theme on user action', async () => {
        render(
            < ThemeChanger />
        )

        fireEvent.change(screen.queryByTestId('theme-changer'), { target: { value: 'dark' } })
        expect(mockSetTheme.mock.calls).toHaveLength(1);
        expect(mockSetTheme.mock.calls[0][0]).toBe('dark')

        fireEvent.change(screen.queryByTestId('theme-changer'), { target: { value: 'system' } })
        expect(mockSetTheme.mock.calls).toHaveLength(2);
        expect(mockSetTheme.mock.calls[1][0]).toBe('system')
    })
})
