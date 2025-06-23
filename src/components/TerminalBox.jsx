import { useState, useRef, useEffect } from "react";
import About from "./commands/About";
import ReadOnlyCmd from "./ReadOnlyCmd";
import BaseCmd from "./BaseCmd";
import renderCmd from "../utils/renderCmd";

const DUMMY_DATA = [
    {
        cmd: "neofetch",
        Component: About,
        time: new Date().toLocaleTimeString()
    },
];

export default function TerminalBox({ inputRef }) {
    const [enteredCmd, setEnteredCmd] = useState(DUMMY_DATA);
    const bottomRef = useRef(null);

    function handleEnteredCommand(inputCmd) {
        const trimmedInput = inputCmd.trim().toLowerCase();
        const entryCmd = renderCmd(trimmedInput);
        const newEntry = {
            ...entryCmd,
            time: new Date().toLocaleTimeString(),
        };
        setEnteredCmd((prev) => [...prev, newEntry]);
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "instant" });
    }, [enteredCmd]);

    return (
        <div
            className="max-w-4xl h-[55vh] mx-auto p-4 text-[13px] font-mono text-gray-300 overflow-y-auto 
        border-2 border-slate-200 rounded-md bg-black/35 space-y-2"
        >
            {enteredCmd.map((cmd, index) => (
                <ReadOnlyCmd key={index} enteredCmd={cmd} />
            ))}
            <BaseCmd isInput={true} onCreate={handleEnteredCommand} inputRef={inputRef} />
            <div ref={bottomRef} />
        </div>
    );
}
