import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageOrdersService } from '../../manage-orders.service';
import { IOrders, ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {
  items = [11, 2, 3, 4, 5]
  orderStatus$: Observable<string[]>;
  orders$: Observable<IOrders[]>;


  constructor(private manageOrderService: ManageOrdersService) { }

  ngOnInit() {
    this.getAllreceivedOrder();
    this.getOrderStatus(ORDERSTATUS.RECEIVED);
  }

  getAllreceivedOrder() {
    this.orders$ = this.manageOrderService.getReceivedOrders();
  }

  getOrderStatus(disCardStatus: string) {
    this.orderStatus$ = this.manageOrderService.getOrderStatus(disCardStatus);
  }

}
