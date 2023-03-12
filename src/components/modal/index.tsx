import * as React from "react"
import { motion } from "framer-motion"

export default function Modal() {
    const [status, setStatus] = React.useState(false)
    const [isAnimating, setisAnimating] = React.useState(false)

    const isOpening = () => isAnimating && status
    const isClosing = () => isAnimating && !status

    const opened = () => !isAnimating && status
    const closed = () => !isAnimating && !status

    React.useEffect(
        () => {
            if (status) globalThis.window.document.body.style.overflow = "hidden"
            if (!status) globalThis.window.document.body.style.overflowY = "scroll"
        },
        [status]
    )

    return <div
        className={status ? "fixed inset-0 w-full min-h-screen h-screen transition-all ease-in-out duration-200 bg-black bg-opacity-60 backdrop-blur-sm" : ""}
        style={{
            // height: globalThis?.window?.innerHeight
        }}
    >
        <div
            className="h-full w-full grid justify-items-center content-center"
        >
            <motion.div
                onLayoutAnimationStart={() => setisAnimating(true)}
                onLayoutAnimationComplete={() => setisAnimating(false)}
                className={`${status ? "block bg-pink-600" : "fixed bg-amber-500 bottom-5 left-5 w-32 h-10"} ${isOpening() ? "rounded-xl" : opened() ? "rounded-xl" : ""} ${isClosing() ? "rounded-[1px]" : closed() ? "rounded" : ""}`}
                style={{
                    paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",
                    // bottom: status && globalThis?.window?.innerWidth < 768 ? "calc(env(safe-area-inset-bottom) + 2rem)" : "",
                }}
                transition={{
                    x: {
                        duration: 0.65,
                        ease: status ? [0.4, 0, 0.1, 1] : [0.4, 0, 0.1, 1],
                    },
                    y: {
                        delay: status ? 0.1 : 0,
                        duration: status ? 0.55 : 0.25,
                        ease: status ? "easeInOut" : [0.4, 0, 0.1, 1],
                    },
                }}
                layout
            >
                {
                    status &&
                    <div
                        className="h-24 w-24"
                    >

                    </div>
                }
                <motion.div layout
                    onClick={() => setStatus(!status)}
                    className="relative top-3 left-3 w-6 h-6 bg-white rounded-full" transition={{ duration: 0.5 }} />
            </motion.div>
        </div>
    </div>
}