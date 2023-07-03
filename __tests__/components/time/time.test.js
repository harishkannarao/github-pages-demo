import { CurrentTime } from "../../../components/time/time"
import * as timeModule from "../../../components/time/time_util"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('../../../components/time/time_util')

describe('time', () => {
    beforeEach(() => {
        timeModule.currentTime = jest.fn();
    });

    it('renders CurrentTime', () => {
        const aDate = new Date('2023-07-03T20:44:40.985Z');
        timeModule.currentTime.mockReturnValue(aDate);

        render(<CurrentTime />)

        const currentTime = screen.queryByTestId('current-time');
        expect(currentTime.textContent).toBe('2023-07-03T20:44:40.985Z');

        // total number of calls made to mock function
        expect(timeModule.currentTime.mock.calls.length).toBe(1);
        // number of parameters passed to each mock function call
        expect(timeModule.currentTime.mock.calls[0].length).toBe(0);
    })
})