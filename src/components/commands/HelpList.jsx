import Animate from "react-smooth";

export default function HelpList() {
    const helpList = [
        {
            cmd: "bio",
            detail: "Show my bio information",
        },
        {
            cmd: "about",
            detail: "Show about this site",
        },
        {
            cmd: "contact",
            detail: "Show contact information",
        },
        {
            cmd: "ls",
            detail: "List available commands",
        },
    ];
    return (
        <div className="">
            {helpList.map(({ cmd, detail }, index) => {
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
                        <div className="flex items-center" key={index}>
                            <h1 className="text-green-300 my-0.5 w-35">{cmd}</h1>
                            <p>{detail}</p>
                        </div>
                    </Animate>
                );
            })}
        </div>
    )
}