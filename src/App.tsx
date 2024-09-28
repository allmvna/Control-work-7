import './App.css';
import {MenuItem, OrderItem} from './types';
import burgerImage from './assets/burger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import AddItems from './components/AddItems';
import {useState} from 'react';
import OrderDetails from './components/OrderDetails';


const menuItems: MenuItem[] = [
    { name: `Hamburger`, price: 150, image: burgerImage },
    { name: 'Cheeseburger', price: 200, image: cheeseburgerImage },
    { name: 'Fries', price: 60, image: friesImage },
    { name: 'Coffee', price: 100, image: coffeeImage },
    { name: 'Tea', price: 20, image: teaImage },
    { name: 'Coca-Cola', price: 55, image: colaImage },
];

const App = () => {

    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const foundItem = orderItems.find((currentItem) => currentItem.item.name === item.name);

        if (foundItem) {
            foundItem.quantity += 1;
            setOrderItems([...orderItems]);
        } else {
            setOrderItems([...orderItems, { item, quantity: 1 }]);
        }
    };

    const removeItem = (itemToRemove: OrderItem) => {
        const updatedOrderItems = orderItems.filter((currentItem) => currentItem.item.name !== itemToRemove.item.name);
        setOrderItems(updatedOrderItems);
    };


    return (
    <>
        <div className= 'App'>
            <div className="order-panel">
                <OrderDetails orderItems={orderItems} onRemoveItem={removeItem}/>
            </div>
                <AddItems menuItems={menuItems} onAddItem={addItem}/>
        </div>
    </>
  )
};

export default App;
