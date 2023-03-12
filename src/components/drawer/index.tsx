import { motion } from "framer-motion"
import React from "react"


export default function Drawer() {
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

    const [boo, setBoo] = React.useState(false)

    return <div className="fixed w-full max-h-screen h-screen"
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
                <div ref={content} className="min-h-[500px] bg-gray-300 p-8 grid gap-4 justify-items-center content-start" >
                    <button type="button" onClick={() => setBoo(v => !v)} className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg shadow-cyan-200 transition-all duration-200 ease-linear hover:shadow-cyan-300 rounded-md px-6 py-3">Battan heer</button>
                    {
                        boo && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia dolorum tempore enim, impedit inventore magni similique expedita debitis ipsam dolore tenetur aliquam soluta asperiores nemo dolor. Ipsa, accusantium dignissimos.</p>
                    }
                </div>
            </div>
        </motion.div>
    </div>
}