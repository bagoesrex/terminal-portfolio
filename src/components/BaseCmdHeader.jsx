import { getFormattedTime } from "../utils/dateTime";

export default function BaseCmdHeader({ cmdDate, isInput = false }) {
    const formattedTime = cmdDate ? getFormattedTime(cmdDate) : "";

    return (
        <div className="flex absolute items-center space-x-1 left-2.5">
            <span className="text-blue-500 font-bold">[</span>
            <span className="text-green-400">kyrex</span>
            <span className="text-blue-300">bagoesrex</span>
            <span className="text-blue-500 font-bold">]</span>
            <span>-</span>
            <span className="text-blue-500 font-bold">[</span>
            <span>~</span>
            <span className="text-blue-500 font-bold">]</span>
            {!isInput &&
                <>
                    <span>-</span>
                    <span className="text-blue-500 font-bold">[</span>
                    <span>{formattedTime}</span>
                    <span className="text-blue-500 font-bold">]</span>
                </>
            }
        </div>
    )
}