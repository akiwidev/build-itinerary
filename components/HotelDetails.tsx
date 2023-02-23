import { Card } from "./Card"

const HotelDetails = () => {
    const hotelOptions: Option[] = [
        {
            id: 'HILTON',
            title: 'Hilton',
            image: '/hilton.jpeg',
            alt: 'Picture of the inside of a luxury hotel',
            cost: '47,300 p/night'
        },
        {
            id: 'FOUR SEASONS',
            title: 'Four Seasons',
            image: '/fourSeasons.jpeg',
            alt: 'Picture of a luxury hotel restaurant with lots of wood and plants',
            cost: '240,000 p/night'
        },
        {
            id: 'HYATT',
            title: 'Hyatt',
            image: '/hyatt.jpeg',
            alt: 'Picture of a hotel bedroom with a lamp on the side table',
            cost: '43,500 p/night'
        },
        {
            id: 'CERULEAN',
            title: 'Cerulean Tower',
            image: '/cerulean.jpeg',
            alt: 'Picture of a hotel bedroom with a lamp on the side table',
            cost: '37,000 p/night'
        },
    ]

    return (
        <Card options={hotelOptions} />
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt: string
    cost: string
}

export { HotelDetails }