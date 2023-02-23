import { Card } from "./Card"

const ExtraDetails = () => {
    const extraOptions: Option[] = [
        {
            id: 'TRANSFER',
            title: 'Airport Transfer',
            image: '/transfer.jpeg',
            alt: 'Picture of taxis lined up',
            cost: '5,000 p/person'
        },
        {
            id: 'DINNER',
            title: 'Dinner at Gonpachi',
            image: '/gonpachi.jpeg',
            alt: 'Picture of the inside of a Japanese restaurant',
            cost: '4,000 p/person'
        },
        {
            id: 'MAIKO',
            title: 'Geisha Experience',
            image: '/geisha.jpeg',
            alt: 'Picture of two geisha',
            cost: '24,500 p/person'
        },
    ]

    return (
        <Card options={extraOptions} />
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt: string
    cost: string
}

export { ExtraDetails }