import './App.css';
import {MenuItem} from './types';
import burgerImage from './assets/burger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import AddItems from "./components/AddItems.tsx";


const menuItems: MenuItem[] = [
    { name: `Hamburger`, price: 150, image: burgerImage },
    { name: 'Cheeseburger', price: 200, image: cheeseburgerImage },
    { name: 'Fries', price: 60, image: friesImage },
    { name: 'Coffee', price: 100, image: coffeeImage },
    { name: 'Tea', price: 20, image: teaImage },
    { name: 'Coca-Cola', price: 55, image: colaImage },
];

console.log(menuItems);

const App = () => {

  return (
    <>
      <div>
          <AddItems menuItems={menuItems} />
      </div>
    </>
  )
};

export default App;
