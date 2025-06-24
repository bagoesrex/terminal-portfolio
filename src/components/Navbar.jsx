import { useState, useEffect } from "react";
import { IoPower, IoWaterOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { getFormattedDate, getFormattedTime } from "../utils/dateTime";

export default function Navbar() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const date = getFormattedDate(dateTime);
    const time = getFormattedTime(dateTime);

    return (
        <>
            <div className="absolute top-0 w-full h-8 px-2 flex items-center justify-between text-[11px] text-white z-10">
                <IoWaterOutline />

                <div className="flex items-center gap-1">
                    <GoClock />
                    <span>{date}</span>
                    <span>|</span>
                    <span>{time}</span>
                </div>

                <div className="flex items-center gap-1">
                    <IoPower />
                </div>
            </div>

        </>
    )
}