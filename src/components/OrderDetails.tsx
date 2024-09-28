import React from 'react';
import {OrderItem} from '../types';

interface OrderDetailsProps {
    orderItems: OrderItem[];
    onRemoveItem: (item: OrderItem) => void;
}

const getTotalPrice = (items: OrderItem[]): number => {
    return items.reduce((total, item) => total + item.item.price * item.quantity, 0);
};

const OrderDetails: React.FC<OrderDetailsProps> = ({orderItems, onRemoveItem}) => {
    const totalPrice = getTotalPrice(orderItems);

    return (
        <div className="order-details-container">
            <h2>Order Details</h2>
            <div>
                {orderItems.length === 0 ? (
                    <p>No orders.</p>
                ) : (
                    <>
                        <ul className="list-orders">
                            {orderItems.map((item) => {
                                const itemTotalPrice = item.item.price * item.quantity;

                                return (
                                    <li key={item.item.name}>
                                        {item.item.name}  x{item.quantity} = {itemTotalPrice} KGS
                                        <button className="remove-btn"
                                                onClick={() => onRemoveItem(item)}>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
            </div>
            <h3>Total Price: {totalPrice.toFixed(2)} SOM</h3>
        </div>
    );
};

export default OrderDetails;