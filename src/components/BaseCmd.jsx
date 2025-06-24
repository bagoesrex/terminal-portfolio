import BaseCmdArrow from "./BaseCmdArrow";
import BaseCmdHeader from "./BaseCmdHeader";
import BaseCmdInput from "./BaseCmdInput";

export default function BaseCmd({ cmdDate, cmdInput, onCreate, inputRef, isInput = false }) {
    return (
        <div className="relative h-10 min-w-md w-full">
            <BaseCmdArrow />
            <BaseCmdHeader cmdDate={cmdDate} isInput={isInput} />
            <BaseCmdInput cmdInput={cmdInput} isInput={isInput} onCreate={onCreate} inputRef={inputRef} />
        </div>
    )
}