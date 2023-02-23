import { Card } from "./Card"

const HotelDetails = () => {
    const hotelOptions: Option[] = [
        {
            id: 'HILTON',
            title: 'Hilton',
            image: '/hilton.jpeg',
            alt: 'Picture of the inside of a luxury hotel',
            costPerNight: '47,300'
        },
        {
            id: 'FOUR SEASONS',
            title: 'Four Seasons',
            image: '/fourSeasons.jpeg',
            alt: 'Picture of a luxury hotel restaurant with lots of wood and plants',
            costPerNight: '240,000'
        },
        {
            id: 'HYATT',
            title: 'Hyatt',
            image: '/hyatt.jpeg',
            alt: 'Picture of a hotel bedroom with a lamp on the side table',
            costPerNight: '43,500'
        },
        {
            id: 'CERULEAN',
            title: 'Cerulean Tower',
            image: '/cerulean.jpeg',
            alt: 'Picture of a hotel bedroom with a lamp on the side table',
            costPerNight: '37,000'
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
    costPerNight: string
}

export { HotelDetails }