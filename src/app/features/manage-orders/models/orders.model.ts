export interface IOrders {
    id: number;
    price: number;
    deliveryAddress: string;
    customerName: string;
    itemName: string;
    noOfItems: number;
    image: string;
    orderStatus: ORDERSTATUS | string;
}

export enum ORDERSTATUS {
    RECEIVED = 'Order Received',
    PREPARING = 'Preparing',
    READYTOSERVE = 'Ready to serve',
}