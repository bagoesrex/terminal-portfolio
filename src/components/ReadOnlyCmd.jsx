import BaseCmd from "./BaseCmd";
import CommandDisplay from "./CommandDisplay";

export default function ReadOnlyCmd({ enteredCmd }) {
    return (
        <>
            <BaseCmd cmdDate={enteredCmd.time} cmdInput={enteredCmd.cmd} />
            <CommandDisplay >
                <enteredCmd.Component />
            </CommandDisplay>
        </>
    )
}