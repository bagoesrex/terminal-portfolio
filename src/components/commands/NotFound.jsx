import Animate from "react-smooth";

export default function NotFound() {
    return (
        <div className="">
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
                <div className="flex flex-col items-center">
                    <h1 className="text-red-400 my-0.5 w-35">Command not found</h1>
                    <h1 className="my-0.5 w-35">Try: ls</h1>
                </div>
            </Animate>
        </div>
    );
}