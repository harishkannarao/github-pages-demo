'use client';

import { CurrentTime } from "../../components/time/time";

export default function TimePage() {
    return (
        <h1 className="bg-primary">
            <span>Current UTC time is: </span><CurrentTime />
        </h1>
    )
}