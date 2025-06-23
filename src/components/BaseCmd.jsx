import BaseCmdArrow from "./BaseCmdArrow";
import BaseCmdHeader from "./BaseCmdHeader";
import BaseCmdInput from "./BaseCmdInput";

export default function BaseCmd({ enteredCmd }) {
    return (
        <>
            <div className="relative h-10 min-w-md w-full">
                <BaseCmdArrow />
                <BaseCmdHeader currentTime={enteredCmd.time} />
                <BaseCmdInput>
                    <enteredCmd.Component />
                </BaseCmdInput>
            </div>
        </>
    )
}