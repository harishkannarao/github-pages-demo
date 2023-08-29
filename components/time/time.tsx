'use client';

import * as timeModule from "./time_util";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export function CurrentTime() {
    const [date, setDate] = useState(undefined);
    const pathname = usePathname();

    useEffect(() => {
        loadDate();
        return () => { };
    }, []);

    async function loadDate() {
        const currentTime = await timeModule.currentTime();
        setDate(currentTime);
    };

    function createDate() {
        if (date) {
            return (<span data-testid="current-time">{date.toISOString()}</span>);
        } else {
            return (<span data-testid="current-time-loading">Loading...</span>);
        }
    }

    return (
        <div>
            <span>{createDate()}</span>
            <br />
            <br />
            <br />
            <span>Path: <span data-testid="path-name">{pathname}</span></span>
        </div>
    );
}