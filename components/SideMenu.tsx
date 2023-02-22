import { useState } from "react"

const SideMenu = () => {
    const [selected, setSelected] = useState<string>("PURPOSE")

    const menuOptions: Options[] = [
        {
            id: "PURPOSE",
            label: 'Purpose of Travel'
        },
        {
            id: "DESTINATION",
            label: 'Destination'
        },
        {
            id: "HOTELS",
            label: 'Hotels'
        },
        {
            id: "EXTRAS",
            label: 'Extras'
        },
    ]

    return (
        <div className="w-52 text-center p-4 bg-slate-50 opacity-90 rounded space-y-4">
            {menuOptions.map(item => (
                <div key={item.id} className={`${selected === item.id && "font-bold bg-slate-300"} p-2 rounded hover:cursor-pointer`} onClick={() => setSelected(item.id)}>{item.label}</div>
            ))}
        </div>
    )
}

type Options = {
    id: string,
    label: string
}

export { SideMenu }