import React from 'react';
import ItemCard from './ItemCard';
import {MenuItem} from '../types';

interface AddItemsProps {
    menuItems: MenuItem[];
    onAddItem: (item: MenuItem) => void; // Изменено на onAddItem
}

const AddItems = ({menuItems, onAddItem}) => {
    return (
        <div className= 'item-card'>
            {menuItems.map((item) => (
                <ItemCard key={item.name} item={item} onAddItem={onAddItem} />
            ))}
        </div>
    );
};

export default AddItems;