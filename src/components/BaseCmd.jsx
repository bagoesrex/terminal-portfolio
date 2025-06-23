import BaseCmdArrow from "./BaseCmdArrow";
import BaseCmdHeader from "./BaseCmdHeader";
import BaseCmdInput from "./BaseCmdInput";

export default function BaseCmd({ cmdDate, cmdInput }) {
    return (
        <div className="relative h-10 min-w-md w-full">
            <BaseCmdArrow />
            <BaseCmdHeader cmdDate={cmdDate} />
            <BaseCmdInput cmdInput={cmdInput} />
        </div>
    )
}