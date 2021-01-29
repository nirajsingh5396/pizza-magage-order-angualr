import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageOrdersService } from '../../manage-orders.service';
import { IOrders, ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {

  orderStatusBtn: string[] = []
  orders: IOrders[] = [];
  @Input() status: string;


  constructor(private manageOrderService: ManageOrdersService) { }

  ngOnInit() {
    this.getAllreceivedOrder();
    this.getOrderStatus();
  }

  getAllreceivedOrder() {
    this.manageOrderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  getOrderStatus() {
  this.manageOrderService.getOrderStatus().
  subscribe((status)=>{this.orderStatusBtn = status})
  }

  changeStatus(order: IOrders) {
    this.manageOrderService.changeOrderStatus(order).subscribe(
      (res) => {
        if (res.status === 'success') {
          this.getAllreceivedOrder();
        }
      }
    );
  }


}
