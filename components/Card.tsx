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
                <div className={`flex flex-col items-center w-[200px] h-[300px] p-2 space-y-4 overflow-auto shadow-md shadow-rose-200  rounded ${selected === option.id && "shadow-lg shadow-rose-400 rounded"} `} onClick={() => setSelected(option.id)}>
                    <div className="w-[150px] h-[200px] relative">
                        <Image
                            src={option.image}
                            alt={option.alt}
                            fill
                            className="rounded shadow"
                        />
                    </div>
                    <p className="font-bold text-center">{option.title}</p>
                    {option.cost && <p className="text-right italic">¥{option.cost}</p>}
                </div>
            ))}
        </>
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt: string
    cost?: string
}

export { Card }
