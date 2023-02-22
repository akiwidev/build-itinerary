import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu'
import { MenuDetails } from '../components/MenuDetails'
import { Cart } from '../components/Cart'

const HomePage = () => {
  return (
    <div className="h-screen border-2 border-red-400">
      <Header />
      <SideMenu />
      <MenuDetails />
      <Cart />
    </div>
  );
};

export default HomePage;
