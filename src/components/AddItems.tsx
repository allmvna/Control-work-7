import React from 'react';
import ItemCard from './ItemCard';
import {MenuItem} from '../types';

interface AddItemsProps {
    menuItems: MenuItem[];
    onAddItem: (item: MenuItem) => void;
}

const AddItems: React.FC<AddItemsProps> = ({menuItems, onAddItem}) => {
    return (
        <div className="item-container">
            {menuItems.length > 0 ? (
                menuItems.map((item) => (
                    <ItemCard key={item.name} item={item} onAddItem={onAddItem}/>
                ))
            ) : (
                <p>No items available.</p>
            )}
        </div>
    );
};

export default AddItems;