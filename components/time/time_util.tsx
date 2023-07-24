'use client';

export function currentTime(): Date {
    return new Date();
}

export async function asyncCurrentTime(): Promise<Date> {

    await new Promise((res) => setTimeout(res, 2000));

    return new Date();
}