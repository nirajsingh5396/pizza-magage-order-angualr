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
    this.getButtonStatus();
  }

  getAllreceivedOrder() {
    this.manageOrderService.getOrders().subscribe(orders => {
      this.orders = orders;
    }, (err) => alert('Something went wrong'));
  }

  getButtonStatus() {
    this.manageOrderService.getTimelineStatus().
      subscribe((status) => { this.orderStatusBtn = status },
        (err) => alert('Something went wrong')
      );
  }

  changeStatus(order: IOrders) {
    // this.manageOrderService.changeOrderStatus(order).subscribe(
    //   (res) => {
    //     if (res.status === 'success') {
    //       this.getAllreceivedOrder();
    //     }
    //   },
    //   (err) => alert('Something went wrong')
    // );
  }


}
