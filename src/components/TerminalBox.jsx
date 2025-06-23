import { useState } from "react";
import About from "./commands/About";
import ReadOnlyCmd from "./ReadOnlyCmd";

const DUMMY_DATA = [
    {
        cmd: "neofetch",
        Component: About,
        time: new Date().toLocaleTimeString()
    },
    {
        cmd: "neofetch",
        Component: About,
        time: new Date().toLocaleTimeString()
    },
    {
        cmd: "neofetch",
        Component: About,
        time: new Date().toLocaleTimeString()
    }
]

export default function TerminalBox() {
    const [enteredCmd, setEnteredCmd] = useState(DUMMY_DATA)

    return (
        <div className="max-w-4xl h-[55vh] mx-auto p-4 text-[13px] font-mono text-gray-300 overflow-y-auto 
        border-2 border-slate-200 rounded-md bg-black/35 space-y-2">
            {enteredCmd.map((cmd, index) => (
                <ReadOnlyCmd key={index} enteredCmd={cmd} />
            ))}
        </div>
    );
}