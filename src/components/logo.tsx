import { ANNIVERSARY_URL } from "@/config"
import { Link } from "react-router-dom"

function T365() {
    return <Link
        to={ANNIVERSARY_URL}
        className="text-primary hover:text-primary/80"
        target="_blank"
        onClick={(e) => e.stopPropagation()}
    >
        365
    </Link>
}

export function Logo({
    className,
    size = 3
}: {
    className?: string,
    size?: number
}) {
    switch (size) {
        case 0:
            return (
                <h1 className={`text-3xl md:text-4xl  text-center font-bold italic select-none ` + className} style={{ fontFamily: "'Saira Variable', sans-serif" }}>
                    byrdocs<span className={`text-xl md:text-2xl`}>.<T365 /></span>
                </h1>
            )
        case 1:
            return (
                <h1 className={`text-3xl sm:text-4xl md:text-5xl text-center font-bold italic select-none ` + className} style={{ fontFamily: "'Saira Variable', sans-serif" }}>
                    byrdocs<span className={`text-xl sm:text-2xl md:text-3xl`}>.<T365 /></span>
                </h1>
            )
        case 2:
            return (
                <h1 className={`text-5xl md:text-6xl text-center font-bold italic select-none ` + className} style={{ fontFamily: "'Saira Variable', sans-serif" }}>
                    byrdocs<span className={`text-3xl md:text-4xl`}>.<T365 /></span>
                </h1>
            )
        default:
            return (
                <h1 className={`text-5xl sm:text-6xl md:text-7xl text-center font-bold italic select-none ` + className} style={{ fontFamily: "'Saira Variable', sans-serif" }}>
                    byrdocs<span className={`text-3xl sm:text-4xl md:text-5xl`}>.<T365 /></span>
                </h1>
            )
    }
}