import { useState } from "react";
import { FaRegSquareFull } from "react-icons/fa6";

export default function BaseCmdInput({ cmdInput, isInput, onCreate, inputRef }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onCreate(inputValue)
        setInputValue("");
    }

    return (
        <div className="flex absolute items-center space-x-1 left-2.5 top-[19.8px] text-white">
            <span className="text-blue-700 font-bold">[</span>
            <span>$</span>
            <span className="text-blue-700 font-bold">]</span>
            <FaRegSquareFull size={8} className="rotate-45" />

            {!isInput ? (
                <span className="ml-0.5 max-w-190 overflow-hidden">{cmdInput}</span>
            ) : (
                <form onSubmit={handleSubmit} className="ml-0.5 block">
                    <input
                        type="text"
                        ref={inputRef}
                        className="bg-transparent border-none text-white focus:outline-none w-190"
                        placeholder="try ls, bio, about, contact"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                    />
                </form>
            )}
        </div>
    );
}
