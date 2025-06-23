import { FaRegSquareFull } from "react-icons/fa6";

export default function BaseCmdInput({ cmdInput }) {
    return (
        <div className="flex absolute justify-center items-center space-x-1 left-2.5 top-[19.8px]">
            <span className="text-blue-700 font-bold">[</span>
            <span>$</span>
            <span className="text-blue-700 font-bold">]</span>
            <FaRegSquareFull size={8} className="rotate-45" />
            <span>{cmdInput}</span>
        </div>
    )
}