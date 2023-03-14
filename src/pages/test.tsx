import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Article = {
    id: string,
    title: string,
    subtitle: string,
    body: string,
    image: string
}

const data: Article[] = [
    {
        id: "1",
        title: "The Health Benefits of Eating Apples",
        subtitle: "An apple a day keeps the doctor away",
        body:
            "Apples are a delicious and nutritious fruit that can help keep you healthy. They're a great source of fiber, vitamins, and minerals, and they can even help lower your risk of certain diseases. In this article, we'll explore the many health benefits of eating apples and give you some ideas for how to incorporate them into your diet.",
        image: "https://source.unsplash.com/random/?apple"
    },
    {
        id: "2",
        title: "10 Ways to Incorporate More Vegetables into Your Diet",
        subtitle: "Healthy eating can be delicious",
        body:
            "Eating a variety of vegetables is essential for good health, but it can be challenging to get enough of them into your diet. In this article, we'll share 10 creative ways to incorporate more vegetables into your meals. From adding them to smoothies to roasting them with spices, these ideas will make healthy eating more enjoyable.",
        image: "https://source.unsplash.com/random/?vegetables"
    },
    {
        id: "3",
        title: "The Benefits of Drinking Green Tea",
        subtitle: "A cup of tea a day can keep the doctor away",
        body:
            "Green tea is a popular beverage that's been enjoyed for centuries. It's rich in antioxidants and other compounds that can help boost your health in a variety of ways. In this article, we'll explore the many benefits of drinking green tea, from improving brain function to reducing the risk of heart disease.",
        image: "https://source.unsplash.com/random/?tea"
    },
    {
        id: "4",
        title: "5 Simple Ways to Reduce Stress",
        subtitle: "Stress less, live more",
        body:
            "Stress is a natural part of life, but too much of it can be harmful to your health. In this article, we'll share 5 simple ways to reduce stress and improve your overall well-being. From practicing mindfulness to getting regular exercise, these tips can help you feel calmer and more centered.",
        image: "https://source.unsplash.com/random/?meditation"
    },
    {
        id: "5",
        title: "The Benefits of Eating Dark Chocolate",
        subtitle: "Indulge in a guilt-free treat",
        body:
            "Dark chocolate is a delicious and nutritious treat that can provide a range of health benefits. It's rich in antioxidants, which can help protect your cells from damage, and it may even help lower your risk of heart disease. In this article, we'll explore the many benefits of eating dark chocolate and give you some ideas for how to incorporate it into your diet.",
        image: "https://source.unsplash.com/random/?chocolate"
    },
    {
        id: "6",
        title: "10 Easy Ways to Boost Your Metabolism",
        subtitle: "Burn more calories without breaking a sweat",
        body:
            "Your metabolism plays a key role in how many calories you burn each day. By boosting your metabolism, you can increase your body's calorie-burning potential and make it easier to lose weight or maintain a healthy weight. In this article, we'll share 10 easy ways to boost your metabolism, from drinking more water to getting enough sleep.",
        image: "https://source.unsplash.com/random/?exercise"
    },
]

const numColors = 4 * 4;
const makeColor = (hue: number) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
    makeColor(Math.round((360 / numColors) * i))
);

function Gallery({ items, setIndex }: {
    items: string[],
    setIndex: React.Dispatch<React.SetStateAction<number | false>>
}) {
    return (
        <ul className="bg-white rounded-3xl w-[500px] h-[500px] m-0 p-4 flex flex-wrap justify-between gap-2 items-center list-none">
            {items.map((color, i) => (
                <motion.li
                    className="rounded-xl p-5 cursor-pointer w-20 h-20"
                    key={color}
                    onClick={() => setIndex(i)}
                    style={{ backgroundColor: color }}
                    layoutId={color}
                />
            ))}
        </ul>
    );
}

function SingleImage({ color, onClick }: {
    color: string,
    onClick: () => void
}) {
    return (
        <div className="absolute inset-0 grid justify-items-center content-center pointer-events-none" onClick={onClick}>
            <motion.div
                layoutId={color}
                className="pointer-events-auto rounded-3xl w-[500px] h-[300px]"
                style={{ backgroundColor: color }}
            />
        </div>
    );
}

const Item = (
    {
        id,
        title,
        subtitle,
        body,
        image
    }: Article
) => {
    return <motion.li
        layoutId={id}
        className={`row-span-5 col-span-2 rounded-xl p-5 cursor-pointer relative overflow-hidden`}
    >
        <Image alt={title} src={image} fill className="object-cover object-center" />
    </motion.li>
}

export function Gal() {
    const [index, setIndex] = useState<number | false>(false)

    return (
        <div className="w-full min-h-screen h-full p-3 md:p-20 bg-gray-200 grid">

            <ul className={`grid gap-1 grid-cols-2 bg-white w-full rounded-3xl m-0 p-4 list-none`}
                style={{
                    gridTemplateRows: `repeat(auto, minmax(0, 1fr))`
                }}
            >
                {data.map(item => <Item key={item.id} {...item} />)}
            </ul>

            <AnimatePresence>
                {index !== false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="bg-white opacity-20 absolute inset-0"
                        onClick={() => setIndex(false)}
                    />
                )}

                {index !== false && (
                    <SingleImage
                        key="image"
                        // index={index}
                        color={colors[index]}
                        // setIndex={setIndex}
                        onClick={() => setIndex(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}


type ElementType = "highlight" | "banner" | "button" | "featured" | "row" | "icon"

const elements: {
    id: string,
    type: ElementType
}[] = [
        {
            id: "1",
            type: "highlight"
        },
        {
            id: "2",
            type: "banner"
        },
        {
            id: "3",
            type: "featured"
        },
        {
            id: "4",
            type: "row"
        },
        {
            id: "5",
            type: "featured"
        },
        {
            id: "6",
            type: "button"
        },
        {
            id: "7",
            type: "icon"
        },
        {
            id: "8",
            type: "icon"
        },
        {
            id: "9",
            type: "banner"
        },
        {
            id: "10",
            type: "featured"
        },
        {
            id: "11",
            type: "icon"
        },
        {
            id: "12",
            type: "icon"
        },
        {
            id: "13",
            type: "icon"
        },
        {
            id: "14",
            type: "icon"
        },
        {
            id: "15",
            type: "row"
        },
        {
            id: "16",
            type: "banner"
        },
        {
            id: "17",
            type: "icon"
        },
        {
            id: "18",
            type: "icon"
        },
        {
            id: "19",
            type: "icon"
        },
        {
            id: "20",
            type: "icon"
        },
        {
            id: "21",
            type: "row"
        },
        {
            id: "22",
            type: "button"
        },
        {
            id: "23",
            type: "button"
        },
        {
            id: "24",
            type: "row"
        },
    ]

const GridOpen = ({ onClick, id }: {
    onClick: () => void,
    id: string
}) => {
    return (
        <div className="" onClick={onClick}>
            <motion.div
                layoutId={id}
                className="pointer-events-auto rounded-3xl bg-black fixed inset-6 grid justify-items-center content-center"
                style={{
                    bottom: "calc(env(safe-area-inset-bottom) + 1.5rem)"
                }}
            />
        </div>
    )
}

const Modal = ({ index, setIndex }: { index: string | false, setIndex: React.Dispatch<React.SetStateAction<string | false>> }) => {
    React.useEffect(
        () => {
            if (index) globalThis.window.document.body.style.overflow = "hidden"
            if (!index) globalThis.window.document.body.style.overflowY = "scroll"
        },
        [index]
    )

    return (
        <AnimatePresence>
            {index !== false && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    key="overlay"
                    className="bg-white opacity-20 fixed inset-0"
                    onClick={() => setIndex(false)}
                />
            )}

            {index !== false && (
                <GridOpen
                    key={index}
                    id={index}
                    onClick={() => setIndex(false)}
                />
            )}
        </AnimatePresence>
    )
}

const Map = ({ type, id, onClick }: { type: ElementType, id: string, onClick: () => void }) => {
    if (type === "highlight") return <Highlight id={id} onClick={onClick} />
    if (type === "banner") return <Banner id={id} onClick={onClick} />
    if (type === "featured") return <Featured id={id} onClick={onClick} />
    if (type === "row") return <Row id={id} onClick={onClick} />
    if (type === "button") return <Button id={id} onClick={onClick} />
    if (type === "icon") return <Icon id={id} onClick={onClick} />
    return <></>
}

export default function Test() {
    const [index, setIndex] = useState<string | false>(false)

    return (
        <div>

            <div
                className="p-2 min-h-screen h-full w-full bg-gray-100 grid gap-2 [--grid-gap:8px] md:[--grid-gap:16px] grid-flow-dense grid-rows-fit-asdasd grid-cols-4 md:grid-cols-12  [--grid-cols:4] md:[--grid-cols:12]"
                style={{
                    gridTemplateRows: "repeat(auto-fill, minmax(calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols)), 1fr))"
                }}
            >
                {
                    elements.map(el => <Map key={el.id} type={el.type} id={el.id} onClick={() => setIndex(el.id)} />)
                }
            </div>

            <Modal index={index} setIndex={setIndex} />
        </div>
    )
}

const Highlight = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-4 col-span-4 bg-pink-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 4)"
        }}
        onClick={onClick}
    />
}

const Banner = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-2 col-span-4 bg-amber-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 2)"
        }}
        onClick={onClick}
    />
}

const Featured = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-2 col-span-2 bg-purple-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 2)"
        }}
        onClick={onClick}
    />
}

const Row = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-1 col-span-4 bg-cyan-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 1)"
        }}
        onClick={onClick}
    />
}

const Button = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-1 col-span-2 bg-red-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 1)"
        }}
        onClick={onClick}
    />
}

const Icon = ({ id, onClick }: { id?: string, onClick: () => void }) => {
    return <motion.div layoutId={id} className="row-span-1 col-span-1 bg-teal-500"
        style={{
            minHeight: "calc((100vw - (var(--grid-gap) * 4)) / var(--grid-cols) * 1)"
        }}
        onClick={onClick}
    />
}


// types of elements
// highlight 4x4
// row 2x4
// featured 2x2
// icon 1x1