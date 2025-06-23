import BaseCmd from "./BaseCmd";

export default function TerminalBox() {
    return (
        <div className="max-w-4xl h-[55vh] mx-auto p-4 text-[13px] font-mono text-gray-300 overflow-y-auto 
        border-2 border-slate-200 rounded-md bg-black/35 space-y-2">
            <BaseCmd />
        </div>
    );
}