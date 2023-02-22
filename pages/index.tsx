import { Header } from '../components/Header';
import { MenuDetails } from '../components/MenuDetails'
import { Cart } from '../components/Cart'
import Image from 'next/image';
import { useState } from 'react';


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
        alt="Picture of a Japanese tori gate in the water"
        fill
        priority
        className='-z-10'
      />
      <Header />
      <div className='flex grow items-stretch space-x-4 pt-4'>
        <div className="w-52 text-center p-4 bg-slate-50 opacity-80 rounded space-y-4">
          {menuOptions.map(item => (
            <div key={item.id} className={`${selected === item.id && "font-bold bg-rose-100"} p-2 rounded hover:cursor-pointer`} onClick={() => setSelected(item.id)}>{item.label}</div>
          ))}
        </div>
        <MenuDetails selectedItem={selected} />
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
