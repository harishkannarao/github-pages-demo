import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CustomNav } from '../../../components/nav/nav';

describe('CustomNav', () => {
    it('displays nav links', async () => {
        render(
            <CustomNav />
        )
        expect(screen.queryByTestId('home-link')).toHaveAttribute('href', '/');
        expect(screen.queryByTestId('time-link')).toHaveAttribute('href', '/time');
        expect(screen.queryByTestId('dynamic-title-link')).toHaveAttribute('href', '/dynamic-title');
    })
})