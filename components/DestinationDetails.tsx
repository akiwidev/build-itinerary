import { Card } from "./Card"

const DestinationDetails = () => {

    const detailOptions: Option[] = [
        {
            id: 'HIROSHIMA',
            title: 'Hiroshima',
            image: '/hiroshima.jpeg',
            alt: 'Picture of the atomic bomb museum in Hiroshima'
        },
        {
            id: 'KYOTO',
            title: 'Kyoto',
            image: '/kyoto.jpeg',
            alt: 'Picture of a traditional Japanese street with a pagoda in the background'
        },
        {
            id: 'HAKONE',
            title: 'Mt Fuji/Hakone',
            image: '/hakone.jpeg',
            alt: 'Picture of Mt Fuji in the distance'
        },
        {
            id: 'OSAKA',
            title: 'Osaka',
            image: '/osaka.jpeg',
            alt: 'Picture of Osaka Castle'
        },
        {
            id: 'TOKYO',
            title: 'Tokyo',
            image: '/tokyo.jpeg',
            alt: 'Picture of Tokyo Tower'
        }
    ]

    return (
        <Card options={detailOptions} />
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt: string
    costPerNight?: number
}

export { DestinationDetails }