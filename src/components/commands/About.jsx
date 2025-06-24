import Animate from "react-smooth";
import { SiFlutter, SiReact, SiVercel } from "react-icons/si";

export default function About() {
    const techStacks = [
        {
            Icon: SiFlutter,
            color: "text-blue-500",
            duration: "500"
        },
        {
            Icon: SiReact,
            color: "text-blue-500",
            duration: "700"
        },
        {
            Icon: SiVercel,
            color: "text-black",
            duration: "900"
        },
    ]

    return (
        <div>
            <div>
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
                    <h1 className="text-green-300">Overview</h1>
                    <p className="mb-3">
                        Terminal Portfolio is a unique approach to showcasing personal projects and skills,
                        presented in a terminal-inspired interface to create a nostalgic and developer-centric experience.
                    </p>
                    <h1 className="text-green-300">Tech Stack</h1>
                    <p className="mb-3">
                        This site is built using React and Tailwind CSS for a fast and responsive UI. It is deployed on Vercel for reliable and efficient hosting.
                    </p>
                </Animate>
            </div>
            <div className="flex flex-row gap-2">
                {techStacks.map(({ Icon, color, duration }, index) => {
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
                            duration={duration}
                            easing="ease-in-out"
                        >
                            <Icon
                                key={index}
                                size={20}
                                className={`${color}`}
                            />
                        </Animate>
                    )
                })}
            </div>
        </div>
    )
}