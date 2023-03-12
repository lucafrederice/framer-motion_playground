import * as React from "react"
import { motion } from "framer-motion"
import Drawer from "@/components/drawer"
import Modal from "@/components/modal"

/**
 * An example of auto animation by setting `animate` to `true`.
 */

export const App = () => {



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

            <Drawer />

            <Modal />
        </div>
    )
}

export default App