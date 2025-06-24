import { useState } from "react";
import { LuDiamond } from "react-icons/lu";

export default function BaseCmdInput({ cmdInput, isInput, onCreate, inputRef }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onCreate(inputValue)
        setInputValue("");
    }

    return (
        <div className="flex absolute items-center space-x-1 left-2.5 top-[19.8px] text-white">
            <span className="text-blue-500 font-bold">[</span>
            <span className="text-purple-400">$</span>
            <span className="text-blue-500 font-bold">]</span>
            <LuDiamond
                size={13}
                className="text-blue-500 scale-y-75 mt-[2px]"
            />

            {!isInput ? (
                <span className="ml-0.5 max-w-190 overflow-hidden text-gray-200">{cmdInput}</span>
            ) : (
                <form onSubmit={handleSubmit} className="ml-0.5 block">
                    <input
                        type="text"
                        ref={inputRef}
                        className="bg-transparent border-none text-gray-200 focus:outline-none w-190"
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
