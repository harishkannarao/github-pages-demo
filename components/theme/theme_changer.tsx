'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeChanger() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted) {
        return (
            <select data-testid='theme-changer' value={theme} onChange={e => setTheme(e.target.value)}>
                <option data-testid='theme-changer-system' value="system">System</option>
                <option data-testid='theme-changer-dark' value="dark">Dark</option>
                <option data-testid='theme-changer-light' value="light">Light</option>
            </select>
        );
    } else {
        return null;
    }
}