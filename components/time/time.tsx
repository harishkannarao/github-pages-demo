'use client';

import * as timeModule from "./time_util";

export function CurrentTime() {
    return (
        <span data-testid="current-time">{timeModule.currentTime().toISOString()}</span>
    );
}