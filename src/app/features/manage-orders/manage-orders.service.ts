import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOrders, ORDERSTATUS } from './models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class ManageOrdersService {

  orders: IOrders[] = [
    { id: 11, itemName: 'Mr. Nice', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Sohan Thin ', deliveryAddress: 'Crispy Chicken Calzone Pizza At Onesta, Multiple Outlets' },
    { id: 12, itemName: 'Narco', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Nohan Multigrain', deliveryAddress: 'Manali Pizza At Eurasia Pasta & Barbeque By Little Italy, Jayanagar' },
    { id: 13, itemName: 'Bombasto', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Rohan Regular ', deliveryAddress: 'Nutella Pizza At Pizza Bakery, Indiranagar' },
    { id: 14, itemName: 'Celeritas', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Suresh Flat', deliveryAddress: 'Shrooms Pizza At Brik Oven, Church Street' },
    { id: 15, itemName: 'Magneta', noOfItems: 1, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Ramesh crust', deliveryAddress: 'BBQ Chicken Pizza At Toscano, Multiple Outlets' },
    { id: 16, itemName: 'RubberMan', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 350, customerName: 'santhosh bread', deliveryAddress: 'Pesto Chicken Pizza At Chianti, Multiple Outlets' },
    { id: 17, itemName: 'Dynama', noOfItems: 3, orderStatus: ORDERSTATUS.RECEIVED, price: 150, customerName: 'Jana crust', deliveryAddress: 'Chicken Pizza Bolognese At Napoli Italian Bistro, HSR Layout' },
    { id: 18, itemName: 'Dr IQ', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 400, customerName: 'Amit', deliveryAddress: 'Magic Mushroom Pizza At Mojo Pizza- 2X Toppings, Multiple Outlets' },
    { id: 19, itemName: 'Magma', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Ajay crust', deliveryAddress: ' Spinach & Corn Pizza At Go Italia, Multiple Outlets' },
    { id: 20, itemName: 'Tornado', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Sachin read', deliveryAddress: 'Make Your Own Pizza At 1441 Pizzeria, JP Nagar 1st Phase' },
    { id: 21, itemName: 'Mr. Nice', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Uday crust', deliveryAddress: 'Make Your Own Pizza At 1441 Pizzeria, JP Nagar 1st Phase' },
    { id: 22, itemName: 'Narco', noOfItems: 3, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Marwan', deliveryAddress: '8 Inch Cheese Burst Pizza At Northam’s Pizza Pita, HSR Layout' },
    { id: 23, itemName: 'Bombasto', noOfItems: 4, orderStatus: ORDERSTATUS.RECEIVED, price: 400, customerName: 'Priyanka base', deliveryAddress: 'Roasted Chicken Pizza At Vinny’s, Multiple Outlets' },
    { id: 24, itemName: 'Celeritas', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Rahul bread', deliveryAddress: 'Queen Margherita’s At Flames Pizza, Yelahanka' },
    { id: 25, itemName: 'Magneta', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 500, customerName: 'Niraj crust', deliveryAddress: 'Tartufo Pizza At Toit, Indiranagar' },
    { id: 26, itemName: 'RubberMan', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 350, customerName: 'Niket bread', deliveryAddress: 'Roasted Chicken Pizza At Vinny’s, Multiple Outlets' },
    { id: 27, itemName: 'Dynama', noOfItems: 3, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Kunda base', deliveryAddress: 'Lamb Sundried Tomato Pizza At Fenny’s Lounge & Kitchen, Koramangala' },
    { id: 28, itemName: 'Dr IQ', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 400, customerName: 'Rajjev', deliveryAddress: 'Lamb Sundried Tomato Pizza At Fenny’s Lounge & Kitchen, Koramangala' },
    { id: 29, itemName: 'Magma', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Chandrankant crust', deliveryAddress: 'Queen Margherita’s At Flames Pizza, Yelahanka' },
    { id: 30, itemName: 'Tornado', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 600, customerName: 'Ankit patel', deliveryAddress: 'Tartufo Pizza At Toit, Indiranagar' }

  ];

  preparingOrders: IOrders[] = [];

  constructor() { }

  getOrderStatus(): Observable<string[]> {
    const status = ['Preparing', 'Ready to serve'];
    return of(status);
  }


  getOrders(): Observable<IOrders[]> {
    console.log(this.orders)
    return of(this.orders)
  }

  changeOrderStatus(reqOrder: IOrders): Observable<any> {
    const order = this.orders.find((order) => order.id === reqOrder.id);
    if (!order) {
      return of(null);
    }
    order.orderStatus = reqOrder.orderStatus;
    return of({ status: 'success', message: `Status has been changed to${status}` })
  }
}
