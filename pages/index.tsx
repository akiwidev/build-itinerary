import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu'
import { MenuDetails } from '../components/MenuDetails'
import { Cart } from '../components/Cart'
import Image from 'next/image';


const HomePage = () => {
  return (
    <div className="h-screen flex flex-col p-4">
      <Image
        src='/japaneseShrine.jpeg'
        alt="Picture of a Japanese tori gate in the water"
        fill
        priority
        className='-z-10'
      />
      <Header />
      <div className='flex grow items-stretch space-x-4 pt-4'>
        <SideMenu />
        <MenuDetails />
        <Cart />
      </div>
    </div>
  );
};

export default HomePage;
