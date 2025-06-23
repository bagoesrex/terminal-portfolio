import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BackgroundImage() {
    return (
        <>
            <div className="absolute top-0 h-screen w-full -z-10">
                <LazyLoadImage
                    src="wallpaper.png"
                    alt="Wallpaper Background"
                    effect="blur"
                    className="w-full h-full object-cover object-center"
                    wrapperClassName="w-full h-full bg-black/70"
                />
            </div>
        </>
    )
}