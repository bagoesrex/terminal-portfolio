import megumin from "../ascii/megumin"
import Animate from "react-smooth";
import { SiArchlinux, SiGnometerminal, SiLinux } from "react-icons/si"
import { BsArrowRight, BsCpu } from "react-icons/bs"
import { BiFont, BiMicrochip } from "react-icons/bi"
import { TbPacman } from "react-icons/tb"
import { CiMonitor } from "react-icons/ci"
import { PiMemoryLight } from "react-icons/pi"

export default function Neofetch() {
    const hardwareInformation = [
        {
            Icon: BsCpu,
            detail: "AMD Ryzen 3 5300U",
        },
        {
            Icon: BiMicrochip,
            detail: "AMD Radeon Graphics",
        },
        {
            Icon: PiMemoryLight,
            detail: "16 GB DDR4 RAM ",
        },
        {
            Icon: CiMonitor,
            detail: "1920x1080",
        },
    ]
    const softwareInformation = [
        {
            Icon: SiArchlinux,
            detail: "EndeavourOS Linux x86_64",
        },
        {
            Icon: SiLinux,
            detail: "Linux 6.9.2-arch1-1",
        },
        {
            Icon: SiGnometerminal,
            detail: "alacritty",
        },
        {
            Icon: BiFont,
            detail: "JetBrains Mono Nerd Font",
        },
        {
            Icon: TbPacman,
            detail: "1058 (pacman)",
        },
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
            <div className="flex text-gray-200">
                <div>
                    <pre className="text-red-200 text-[5px] whitespace-pre-wrap">{megumin}</pre>
                </div>
                <div className="flex flex-col ml-10 gap-0.2">
                    <h2 className="w-57 border-t-2 border-white pt-1">Hardware Information</h2>
                    {hardwareInformation.map(({ Icon, detail }, index) => {
                        return (
                            <div className="flex items-center gap-2" key={index}>
                                <Icon />
                                <BsArrowRight />
                                <p>{detail}</p>
                            </div>
                        )
                    })}
                    <h2 className="w-57 border-t-2 border-white mt-2 pt-1">Software Information</h2>
                    {softwareInformation.map(({ Icon, detail }, index) => {
                        return (
                            <div className="flex items-center gap-2" key={index}>
                                <Icon />
                                <BsArrowRight />
                                <p>{detail}</p>
                            </div>
                        )
                    })}
                    <hr className="w-57 border-t-2 border-white my-2" />
                    <p className="flex w-57 justify-around">
                        <span>M</span>
                        <span>E</span>
                        <span>G</span>
                        <span>U</span>
                        <span>M</span>
                        <span>I</span>
                        <span>N</span>
                        <span>E</span>
                    </p>
                </div>
            </div>
        </Animate>
    )
}