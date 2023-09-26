import { CurrentTime } from "../../components/time/time";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Current Time' 
}

export default function TimePage() {
    return (
        <h1 className="bg-primary">
            <span>Current UTC time is: </span><CurrentTime />
        </h1>
    )
}