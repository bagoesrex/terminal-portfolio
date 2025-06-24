import Animate from "react-smooth";

export default function Contact() {
    const contacts = [
        {
            text: "Whatsapp number",
            value: "+62895359853988",
            href: "https://wa.me/+62895359853988",
        },
        {
            text: "Email",
            value: "bagoesrex@gmail.com",
            href: "mailto:bagoesrex@gmail.com",
        },
    ];
    return (
        <div className="">
            {contacts.map(({ text, value, href }, index) => {
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
                            <h1 className="text-green-400 my-0.5 w-35">{text}</h1>
                            <a
                                href={href}
                                className="flex-1 no-underline text-blue-300 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {value}
                            </a>
                        </div>
                    </Animate>
                );
            })}
        </div>
    );
}
