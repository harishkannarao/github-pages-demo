'use client';

import dynamic from 'next/dynamic';

const CurrentTime = dynamic(() => import('../../components/time/time').then((mod) => mod.CurrentTime), { ssr: false });

export default function Page() {
    return (
        <h1 className="bg-primary">
            <span>Current UTC time is: </span><CurrentTime />
        </h1>
    )
}