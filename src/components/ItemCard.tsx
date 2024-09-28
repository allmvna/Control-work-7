import React from 'react';
import {MenuItem} from '../types';

interface ItemCardProps {
    item: MenuItem;
    onAddItem: (item: MenuItem) => void;
    onRemoveItem: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({item, onAddItem}) => {
    const handleClick = () => {
        onAddItem(item);
    };

    return (
        <div>
            <button className="item-button" onClick={handleClick}>
                <img src={item.image} alt={item.name} className="item-image"/>
                <p>{item.name}</p>
                <span>{item.price} KGS</span>
            </button>
        </div>
    );
};

export default ItemCard;