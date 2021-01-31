import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ManageOrdersService } from '../../../../shared/services/manage-orders.service';
import { IOrders, ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {
  @Input() header: string;
  @Input() status: string;
  orders: IOrders[] = [];

  constructor(
    private manageOrderService: ManageOrdersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    if (this.status === 'all') {
      return this.getAllreceivedOrder();
    }
    this.getAllreceivedOrder(!!this.status ? this.status : ORDERSTATUS.RECEIVED);
  }

  getAllreceivedOrder(status?: string) {
    this.manageOrderService.getOrders(status).subscribe(orders => {
      this.orders = orders;
    }, (err) => { this.notificationService.showNotification('Something went wrong', 'bottom', 'error') });
  }



}
