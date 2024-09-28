import React from 'react';
import {MenuItem} from '../types';

interface ItemCardProps {
    item: MenuItem;
    onAddItem: (item: MenuItem) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({item, onAddItem}) => {
    return (
        <div>
            <button className="item-button" onClick={() => onAddItem(item)}>
                <img src={item.image} alt={item.name} className="item-image"/>
                <p>{item.name}</p>
                <span>{item.price} som</span>
            </button>
        </div>
    );
};

export default ItemCard;