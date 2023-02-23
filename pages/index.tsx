import { Header } from '../components/Header';
import { MenuDetails } from '../components/MenuDetails'
import { Cart } from '../components/Cart'
import Image from 'next/image';
import { useState } from 'react';
import { PurposeDetails } from '../components/PurposeDetails';
import { DestinationDetails } from '../components/DestinationDetails';
import { HotelDetails } from '../components/HotelDetails';
import { ExtraDetails } from '../components/ExtraDetails';


const HomePage = () => {
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
    <div className="h-screen flex flex-col p-4">
      <Image
        src='/sakura.jpeg'
        alt="Close up picture of a cherry blossom branch"
        fill
        priority
        className='-z-10'
      />
      <Header />
      <div className='flex grow items-stretch space-x-4 pt-4 overflow-hidden'>
        <div className="w-52 shrink-0 text-center p-4 bg-slate-50 opacity-80 rounded space-y-4">
          {menuOptions.map(item => (
            <div key={item.id} className={`${selected === item.id && "font-bold bg-rose-100"} p-2 rounded hover:cursor-pointer`} onClick={() => setSelected(item.id)}>{item.label}</div>
          ))}
        </div>
        <div className="flex flex-wrap grow min-w-[300px] p-4 gap-4 bg-slate-50 opacity-80 rounded overflow-auto">
          {selected === "PURPOSE" && <PurposeDetails />}
          {selected === "DESTINATION" && <DestinationDetails />}
          {selected === "HOTELS" && <HotelDetails />}
          {selected === "EXTRAS" && <ExtraDetails />}
        </div>
        <Cart />
      </div>
    </div>
  );
};

type Options = {
  id: string,
  label: string
}

export default HomePage;
