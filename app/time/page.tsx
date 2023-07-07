import { CurrentTime } from "../../components/time/time";

export default function Page() {
    return (
        <h1 className="badge bg-primary">
            <span>Current UTC time: </span><CurrentTime />
        </h1>
    )
}