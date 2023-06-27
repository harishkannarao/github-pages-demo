import { CurrentTime } from "../../components/time/time";

export default function Page() {
    return (
        <h1>
            <span>Current UTC time: </span><CurrentTime />
        </h1>
    )
}