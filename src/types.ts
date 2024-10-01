export interface MenuItem {
    name: string;
    price: number;
    image: string;
}


export interface OrderItem {
    item: MenuItem;
    quantity: number;
}