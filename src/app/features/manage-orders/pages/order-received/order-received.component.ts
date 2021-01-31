import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ManageOrdersService } from '../../../../shared/services/manage-orders.service';
import { IOrders, ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {

  orders: IOrders[] = [];

  constructor(
    private manageOrderService: ManageOrdersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getAllreceivedOrder();
  }

  getAllreceivedOrder() {
    this.manageOrderService.getOrders().subscribe(orders => {
      this.orders = orders;
    }, (err) => { this.notificationService.showNotification('Something went wrong', 'bottom', 'error') });
  }



}
