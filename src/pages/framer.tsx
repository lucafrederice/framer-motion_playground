import * as React from "react"
import { motion } from "framer-motion"

/**
 * An example of auto animation by setting `animate` to `true`.
 */

export const App = () => {
    const [status, setStatus] = React.useState(false)
    const [isAnimating, setisAnimating] = React.useState(false)

    const isOpening = () => isAnimating && status
    const isClosing = () => isAnimating && !status

    const opened = () => !isAnimating && status
    const closed = () => !isAnimating && !status

    const container = React.useRef<HTMLDivElement>(null)
    const [containerHeight, setContainerHeight] = React.useState<number>()

    React.useEffect(
        () => {
            setContainerHeight(container?.current?.scrollHeight)
        },
        [container?.current?.scrollHeight]
    )

    const content = React.useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = React.useState<number>()

    React.useEffect(
        () => {
            setContentHeight(content?.current?.scrollHeight)
        },
        [content?.current?.scrollHeight]
    )

    React.useEffect(
        () => {
            if (status) globalThis.window.document.body.style.overflow = "hidden"
            if (!status) globalThis.window.document.body.style.overflowY = "scroll"
        },
        [status]
    )



    return (
        <div className="relative">

            <div className={`relative min-h-screen h-[150vh] bg-gradient-to-br from-pink-500 to-purple-900`}>
                <div
                    className="p-10"
                >
                    <div
                        className="mx-auto grid gap-8 content-center justify-items-center max-w-3xl"
                    >
                        <h1
                            className="text-white text-center text-5xl font-bold"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam?
                        </h1>
                        <p className="text-gray-200 text-center text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aliquam amet id ut quaerat. Cumque ipsa saepe rerum, modi labore enim quidem? Omnis nemo quibusdam harum unde perspiciatis magni ipsam. Totam sed necessitatibus quibusdam similique voluptate consequuntur suscipit voluptates corporis nulla? Suscipit officiis esse quam placeat et ex, temporibus nihil illo distinctio laboriosam iste amet accusantium sequi tenetur consequuntur ratione vitae sed aspernatur! Quisquam, ex quia. Inventore vel blanditiis nesciunt maiores laborum voluptates ut nulla voluptatem, architecto, quo eveniet alias harum nobis ab magni aperiam odit dolorum sint id velit, fugit rerum. Mollitia deleniti excepturi ex sequi, possimus commodi quasi maxime, voluptatum beatae hic dolorum culpa suscipit explicabo, provident modi porro corrupti ab odit labore deserunt. Doloribus quam iure explicabo nesciunt esse, sit laudantium. Sit perspiciatis omnis perferendis, deleniti minus ducimus voluptatum vel nesciunt est esse repudiandae voluptatibus ipsam itaque accusamus dicta, quia totam repellendus alias voluptatem aliquam iste. Est.</p>
                    </div>
                </div>
            </div>



            <div className="fixed w-full max-h-screen h-screen"
            >
                <motion.div
                    dragElastic={0.1}
                    drag={'y'}
                    dragConstraints={{ bottom: 0, top: contentHeight ? - contentHeight : 0 }}
                    className={`fixed left-0 right-0 h-max w-full bg-white rounded-t-2xl shadow-lg`}
                    style={{
                        bottom: containerHeight && - containerHeight
                    }}
                >
                    <div
                        className="w-full grid justify-items-center content-center gap-5 pt-3 px-4"
                        style={{
                            paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)"
                        }}
                    >
                        <div className="w-1/4 max-w-[8rem] h-1 rounded bg-gray-300" />
                        Hellaw
                    </div>
                    <div ref={container} className={`w-full p-4 bg-gray-100`}
                        style={{
                            paddingBottom: contentHeight
                        }}
                    >
                        <div ref={content} className="min-h-[500px] bg-gray-300" ></div>
                    </div>
                </motion.div>
            </div>

            <div
                className={status ? "fixed inset-0 w-full min-h-screen h-screen transition-all ease-in-out duration-200 bg-black bg-opacity-60 backdrop-blur-sm" : ""}
                style={{
                    // height: globalThis?.window?.innerHeight
                }}
            >
                <motion.div
                    onLayoutAnimationStart={() => setisAnimating(true)}
                    onLayoutAnimationComplete={() => setisAnimating(false)}
                    className={`fixed ${status ? "md:inset-60 inset-x-8 top-8 bg-pink-600" : "bg-amber-500 bottom-5 left-5 w-32 h-10"} ${isOpening() ? "rounded-xl" : opened() ? "rounded-xl" : ""} ${isClosing() ? "rounded-[1px]" : closed() ? "rounded" : ""}`}
                    style={{
                        paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)",
                        bottom: status ? "calc(env(safe-area-inset-bottom) + 2rem)" : "",
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
                    <motion.div layout
                        onClick={() => setStatus(!status)}
                        className="relative top-3 left-3 w-6 h-6 bg-white rounded-full" transition={{ duration: 0.5 }} />
                </motion.div>
            </div>
        </div>
    )
}

export default App