import Image from "next/image"
import { useState } from "react"

type CardProps = {
    options: Option[]
}

const Card = ({ options }: CardProps) => {
    const [selected, setSelected] = useState<string>("")

    return (
        <>
            {options.map((option: Option) => (
                <div className={`flex w-[300px] h-[200px] p-2 space-x-4 overflow-auto shadow-md shadow-rose-200  rounded ${selected === option.id && "shadow-lg shadow-rose-400 rounded"} `} onClick={() => setSelected(option.id)}>
                    <Image
                        src={option.image}
                        alt="Picture of a Hilton hotel"
                        width={150}
                        height={200}
                        className="rounded"
                    />
                    <p className="font-bold">{option.title}</p>
                    {option.costPerNight && <p className="text-right italic">¥70,000 p/night</p>}
                </div>
            ))}
        </>
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt?: string
    costPerNight?: number
}

export { Card }
