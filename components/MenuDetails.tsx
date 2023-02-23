import { PurposeDetails } from '../components/PurposeDetails'
import { DestinationDetails } from '../components/DestinationDetails'
import { HotelDetails } from '../components/HotelDetails'
import { ExtraDetails } from '../components/ExtraDetails'

type MenuDetailsProps = {
    selectedItem: string
}

const MenuDetails = ({ selectedItem }: MenuDetailsProps) => {
    switch (selectedItem) {
        case 'PURPOSE':
            return <PurposeDetails />
        case 'DESTINATION':
            return <DestinationDetails />
        case 'HOTELS':
            return <HotelDetails />
        case 'EXTRAS':
            return <ExtraDetails />
        default:
            return <PurposeDetails />
    }
}

export { MenuDetails }