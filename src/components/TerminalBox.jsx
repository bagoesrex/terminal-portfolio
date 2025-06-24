import { useState, useRef, useEffect, useCallback } from "react";
import ReadOnlyCmd from "./ReadOnlyCmd";
import BaseCmd from "./BaseCmd";
import renderCmd from "../utils/renderCmd";
import Neofetch from "./commands/Neofetch";

const defaultCommands = [
    {
        cmd: "neofetch",
        Component: Neofetch,
        time: new Date()
    },
];

export default function TerminalBox({ inputRef }) {
    const [enteredCmd, setEnteredCmd] = useState(defaultCommands);
    const bottomRef = useRef(null);

    const handleEnteredCommand = useCallback((inputCmd) => {
        const trimmedInput = inputCmd.trim().toLowerCase();
        const entryCmd = renderCmd(trimmedInput);

        if (entryCmd.action === "clear") {
            setEnteredCmd([]);
            return;
        }

        const newEntry = {
            ...entryCmd,
            time: new Date(),
        };
        setEnteredCmd((prev) => [...prev, newEntry]);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "instant" });
    }, [enteredCmd]);

    return (
        <div
            className="max-w-4xl h-[75vh] mx-auto p-4 text-[13px] font-mono text-gray-300 overflow-y-auto 
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
