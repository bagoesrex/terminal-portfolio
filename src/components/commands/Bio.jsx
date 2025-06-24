import { SiArchlinux, SiCodewars, SiGithub, SiTelegram, SiXdadevelopers } from "react-icons/si";
import Animate from "react-smooth";

export default function Bio() {
    const links = [
        {
            title: "Xda-Forums",
            Icon: SiXdadevelopers,
            href: "https://xdaforums.com/m/bagoesrex.12535621",
            text: "@bagoesrex"
        },
        {
            title: "Github",
            Icon: SiGithub,
            href: "https://github.com/bagoesrex",
            text: "@bagoesrex"
        },
        {
            title: "Telegram",
            Icon: SiTelegram,
            href: "https://t.me/bagoesrex",
            text: "@bagoesrex"
        },
        {
            title: "Codewars",
            Icon: SiCodewars,
            href: "https://www.codewars.com/users/bagoesrex",
            text: "@bagoesrex"
        }

    ]
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
            <div className="flex flex-col gap-2">

                <div className="flex">
                    <img
                        src="/me.png"
                        alt="Bio Image"
                        className="size-25 rounded-full border-2 border-green-300 object-cover pointer-events-none select-none"
                    />
                    <div className="flex item-center justify-center flex-col ml-3">
                        <div className="flex gap-1 items-center">
                            <h1 className="text-md">Bagoes Rex</h1>
                            <SiArchlinux />
                        </div>
                        <p>Megumin's Boyfriend</p>
                    </div>
                </div>
                <div>
                    <p>
                        Hi there! I'm Bagus Rahmawan.
                        I'm a tech enthusiast with a strong interest in building responsive and interactive web applications.
                        I enjoy experimenting with new technologies and creating clean user interfaces.
                    </p>
                    <div className="grid grid-cols-2 w-[50%] mt-1">
                        {links.map(({ Icon, text, href, title }, index) => {
                            return (
                                <div className="flex items-center gap-1" key={index}>
                                    <div className="flex items-center gap-1 text-green-300">
                                        <Icon
                                            size={10}
                                        />
                                        <p>{title}</p>
                                    </div>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 no-underline text-blue-300 hover:underline "
                                    >
                                        {text}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Animate>

    )
}