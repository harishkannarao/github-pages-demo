'use client';

import { CurrentTime } from "../../components/time/time";

export default function Page() {
    return (
        <h1 className="bg-primary">
            <span>Current UTC time: </span><CurrentTime />
        </h1>
    )
}