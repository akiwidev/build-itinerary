import { Card } from './Card'

const PurposeDetails = () => {

    const purposeOptions = [
        {
            id: 'CONFERENCE',
            title: 'Conference',
            image: '/conference.jpeg'
        },
        {
            id: 'INCENTIVE',
            title: 'Incentive',
            image: '/incentive.jpeg'
        },
        {
            id: 'BESPOKE',
            title: 'Bespoke Luxury Travel',
            image: '/bespoke.jpeg'
        },
        {
            id: 'MEETING',
            title: 'Meeting',
            image: '/meeting.jpeg'
        },
        {
            id: 'SCHOOL',
            title: 'School Excursion',
            image: '/school.jpeg'
        },
        {
            id: 'SPECIAL',
            title: 'Special Interest Tours',
            image: '/specialInterest.jpeg'
        }
    ]

    return (
        <div className='flex flex-wrap overflow-auto gap-4 border-2 border-black'>
            <Card options={purposeOptions} />
        </div>
    )
}

export { PurposeDetails }