import { LuMonitorX } from "react-icons/lu";
import Animate from "react-smooth";

export default function MobileWarning() {
    return (
        <Animate
            from={{
                opacity: 0,
                transform: "translateY(10px)",
            }}
            to={{
                opacity: 1,
                transform: "translateY(0px)",
            }}
            duration={400}
            easing="ease-in-out"
        >
            <div
                className="w-full max-w-sm min-h-[60vh] mx-auto px-6 py-8 font-mono text-gray-200 
                border-2 border-slate-200 rounded-xl bg-black/35 shadow-lg backdrop-blur 
                flex flex-col justify-center items-center space-y-4"
            >
                <LuMonitorX className="text-red-400 text-5xl animate-pulse" />
                <h1 className="text-xl font-bold text-red-400 text-center">
                    Incompatible Screen
                </h1>
                <p className="text-sm text-white text-center leading-relaxed">
                    This portfolio is best viewed on a <span className="text-blue-300 font-semibold">medium screen (md)</span> or larger.
                    <br />
                    Please use a tablet or desktop device for the best experience.
                </p>
            </div>
        </Animate>
    );
}
