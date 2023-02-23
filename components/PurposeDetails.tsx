import { Card } from './Card'

const PurposeDetails = () => {

    const purposeOptions: Option[] = [
        {
            id: 'CONFERENCE',
            title: 'Conference',
            image: '/conference.jpeg',
            alt: 'Picture of a conference room'
        },
        {
            id: 'INCENTIVE',
            title: 'Incentive',
            image: '/incentive.jpeg',
            alt: 'Picture of a plane flying over tall skyscrapers'
        },
        {
            id: 'BESPOKE',
            title: 'Bespoke Luxury Travel',
            image: '/bespoke.jpeg',
            alt: 'Picture of a camera, coffee mug on top of a map'
        },
        {
            id: 'MEETING',
            title: 'Meeting',
            image: '/meeting.jpeg',
            alt: 'Picture of a group of people around a table looking over a chart'
        },
        {
            id: 'SCHOOL',
            title: 'School Excursion',
            image: '/school.jpeg',
            alt: 'Picture of students playing basketball outside on concerete inside a school'
        },
        {
            id: 'SPECIAL',
            title: 'Special Interest Tours',
            image: '/specialInterest.jpeg',
            alt: 'Picture of a martial artist dressed in black inside a warehouse'
        }
    ]

    return (
        <Card options={purposeOptions} />
    )
}

type Option = {
    id: string
    title: string
    image: string
    alt: string
}

export { PurposeDetails }