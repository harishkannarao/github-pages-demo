import { CurrentTime } from "../../../components/time/time"
import * as timeModule from "../../../components/time/time_util"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { usePathname } from "next/navigation";

jest.mock('../../../components/time/time_util')
jest.mock('next/navigation', () => {
    return {
        usePathname: jest.fn()
    }
})

describe('time', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        timeModule.currentTime = jest.fn();
        usePathname.mockReturnValue('/default/');
    });

    it('renders pathname', async () => {
        usePathname.mockReturnValue('/example/');
        render(
            <CurrentTime />
        )
        const pathName = screen.queryByTestId('path-name');
        expect(pathName.textContent).toBe('/example/');
    })

    it('renders CurrentTime', async () => {
        const aDate = new Date('2023-07-03T20:44:40.985Z');
        timeModule.currentTime.mockReturnValue(aDate);

        render(
            <CurrentTime />
        )

        expect(await screen.findByTestId('current-time')).toBeInTheDocument();
        expect(screen.queryByTestId('current-time-loading')).not.toBeInTheDocument();

        const currentTime = screen.queryByTestId('current-time');
        expect(currentTime.textContent).toBe('2023-07-03T20:44:40.985Z');

        // total number of calls made to mock function
        expect(timeModule.currentTime.mock.calls.length).toBe(1);
        // number of parameters passed to each mock function call
        expect(timeModule.currentTime.mock.calls[0].length).toBe(0);
    })
})