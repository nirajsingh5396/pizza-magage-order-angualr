import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IOrders, ORDERSTATUS } from '../../features/manage-orders/models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class ManageOrdersService {

  orders: IOrders[] = [
    { id: 11, itemName: 'Thin crust', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Sohan Thin ', deliveryAddress: 'Crispy Chicken Calzone Pizza At Onesta, Multiple Outlets', image: '1.png' },
    { id: 12, itemName: 'Narco', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Nohan Multigrain', deliveryAddress: 'Manali Pizza At Eurasia Pasta & Barbeque By Little Italy, Jayanagar', image: '2.png' },
    { id: 13, itemName: 'Bombasto', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Rohan Regular ', deliveryAddress: 'Nutella Pizza At Pizza Bakery, Indiranagar', image: '3.png' },
    { id: 14, itemName: 'Cheese burst', noOfItems: 2, orderStatus: ORDERSTATUS.PREPARING, price: 300, customerName: 'Suresh Flat', deliveryAddress: 'Shrooms Pizza At Brik Oven, Church Street', image: '4.png' },
    { id: 15, itemName: 'Magneta', noOfItems: 1, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Ramesh crust', deliveryAddress: 'BBQ Chicken Pizza At Toscano, Multiple Outlets', image: '5.png' },
    { id: 16, itemName: 'Cheese burst', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 350, customerName: 'santhosh bread', deliveryAddress: 'Pesto Chicken Pizza At Chianti, Multiple Outlets', image: '6.png' },
    { id: 17, itemName: 'Margherita Pizza', noOfItems: 3, orderStatus: ORDERSTATUS.READYTOSERVE, price: 150, customerName: 'Jana crust', deliveryAddress: 'Chicken Pizza Bolognese At Napoli Italian Bistro, HSR Layout', image: '2.png' },
    { id: 18, itemName: 'BBQ Chicken Pizza.', noOfItems: 2, orderStatus: ORDERSTATUS.PREPARING, price: 400, customerName: 'Amit', deliveryAddress: 'Magic Mushroom Pizza At Mojo Pizza- 2X Toppings, Multiple Outlets', image: '3.png' },
    { id: 19, itemName: 'Thin crust', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Ajay crust', deliveryAddress: ' Spinach & Corn Pizza At Go Italia, Multiple Outlets', image: '4.png' },
    { id: 20, itemName: 'Peppy Paneer.', noOfItems: 2, orderStatus: ORDERSTATUS.READYTOSERVE, price: 200, customerName: 'Sachin read', deliveryAddress: 'Make Your Own Pizza At 1441 Pizzeria, JP Nagar 1st Phase', image: '5.png' },
    { id: 21, itemName: 'Flat bread', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 200, customerName: 'Uday crust', deliveryAddress: 'Make Your Own Pizza At 1441 Pizzeria, JP Nagar 1st Phase', image: '6.png' },
    { id: 22, itemName: 'Narco', noOfItems: 3, orderStatus: ORDERSTATUS.RECEIVED, price: 300, customerName: 'Marwan', deliveryAddress: '8 Inch Cheese Burst Pizza At Northam’s Pizza Pita, HSR Layout', image: '1.png' },
    { id: 23, itemName: 'Mexican Green Wave', noOfItems: 4, orderStatus: ORDERSTATUS.RECEIVED, price: 400, customerName: 'Priyanka base', deliveryAddress: 'Roasted Chicken Pizza At Vinny’s, Multiple Outlets', image: '2.png' },
    { id: 24, itemName: 'Thin crust', noOfItems: 2, orderStatus: ORDERSTATUS.READYTOSERVE, price: 300, customerName: 'Rahul bread', deliveryAddress: 'Queen Margherita’s At Flames Pizza, Yelahanka', image: '3.png' },
    { id: 25, itemName: 'Magneta', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 500, customerName: 'Niraj crust', deliveryAddress: 'Tartufo Pizza At Toit, Indiranagar', image: '4.png' },
    { id: 26, itemName: 'Flat bread', noOfItems: 2, orderStatus: ORDERSTATUS.PREPARING, price: 350, customerName: 'Niket bread', deliveryAddress: 'Roasted Chicken Pizza At Vinny’s, Multiple Outlets', image: '5.png' },
    { id: 27, itemName: 'Dynama', noOfItems: 3, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Kunda base', deliveryAddress: 'Lamb Sundried Tomato Pizza At Fenny’s Lounge & Kitchen, Koramangala', image: '6.png' },
    { id: 28, itemName: 'Veg Extravaganza.', noOfItems: 2, orderStatus: ORDERSTATUS.PREPARING, price: 400, customerName: 'Rajjev', deliveryAddress: 'Lamb Sundried Tomato Pizza At Fenny’s Lounge & Kitchen, Koramangala', image: '2.png' },
    { id: 29, itemName: 'CHEESE N CORN', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 250, customerName: 'Chandrankant crust', deliveryAddress: 'Queen Margherita’s At Flames Pizza, Yelahanka', image: '3.png' },
    { id: 30, itemName: 'Tornado', noOfItems: 2, orderStatus: ORDERSTATUS.RECEIVED, price: 600, customerName: 'Ankit patel', deliveryAddress: 'Tartufo Pizza At Toit, Indiranagar', image: '6.png' }

  ];


  constructor() { }

  getTimelineStatus(): Observable<string[]> {
    const status = ['Order Received', 'Preparing', 'Ready to serve'];
    return of(status);
  }


  getOrders(status?: string): Observable<IOrders[]> {
    const orders = !!status ? this.orders.filter(x => x.orderStatus === status) : this.orders
    return of(orders);
  }

  changeOrderStatus(reqOrder: IOrders, statusToChange: string): Observable<any> {
    const order = this.orders.find((order) => order.id === reqOrder.id);
    if (!order) {
      return of(null);
    }
    order.orderStatus = statusToChange
    return of({ status: 'success', message: `Status has been changed to ${statusToChange}` })
  }

  getOrderById(id: number): Observable<IOrders> {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      return of(null);
    }

    return of(order);

  }

  getOrderStatusForPieChart(): Observable<any[]> {
    /**
     * Transforming data in this format [[], [], [],[]]
     * first calculating lenghth of all status 
     * after that runing loop utpo how many status are there
     */
    const datas = [];
    const counts: number[] = [];
    const RECEIVEDCOUNT = this.orders.filter(x => x.orderStatus === ORDERSTATUS.RECEIVED).length;
    const PREPARINGCOUNT = this.orders.filter(x => x.orderStatus === ORDERSTATUS.PREPARING).length;
    const READYTOSERVECOUNT = this.orders.filter(x => x.orderStatus === ORDERSTATUS.READYTOSERVE).length;
    counts.push(RECEIVEDCOUNT, PREPARINGCOUNT, READYTOSERVECOUNT)
    return this.getTimelineStatus().pipe(
      mergeMap(status => {
        status.forEach((state, index) => {
          datas.push([state, counts[index]]);
        })
        return of(datas)
      })
    );
  }

}
