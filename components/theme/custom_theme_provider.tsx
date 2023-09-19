'use client';

import { ThemeProvider } from 'next-themes';

export function CustomThemeProviders({ children }) {
    return <ThemeProvider attribute="data-bs-theme">{children}</ThemeProvider>
}