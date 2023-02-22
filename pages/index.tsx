import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu'
import { MenuDetails } from '../components/MenuDetails'
import { Cart } from '../components/Cart'

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className='flex grow items-stretch'>
        <SideMenu />
        <MenuDetails />
        <Cart />
      </div>
    </div>
  );
};

export default HomePage;
