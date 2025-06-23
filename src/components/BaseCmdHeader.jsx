export default function BaseCmdHeader() {
    return (
        <div className="flex absolute items-center space-x-1 left-2.5">
            <span className="text-blue-700 font-bold">[</span>
            <span>kyrex bagoesrex</span>
            <span className="text-blue-700 font-bold">]</span>
            <span>-</span>
            <span className="text-blue-700 font-bold">[</span>
            <span>~</span>
            <span className="text-blue-700 font-bold">]</span>
            <span>-</span>
            <span className="text-blue-700 font-bold">[</span>
            <span>{new Date().toLocaleString()}</span>
            <span className="text-blue-700 font-bold">]</span>
        </div>

    )
}