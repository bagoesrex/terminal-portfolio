import BaseCmdArrow from "./BaseCmdArrow";
import BaseCmdHeader from "./BaseCmdHeader";
import BaseCmdInput from "./BaseCmdInput";

export default function BaseCmd() {
    return (
        <div className="relative h-20 min-w-md w-full">
            <BaseCmdArrow />
            <BaseCmdHeader />
            <BaseCmdInput />
        </div>
    )
}