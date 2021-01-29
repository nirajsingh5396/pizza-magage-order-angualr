import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageOrdersService } from '../../manage-orders.service';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {
  items = [11, 2, 3, 4, 5]
  orderStatus$: Observable<string[]>;

  constructor(private manageOrderService: ManageOrdersService) { }

  ngOnInit() {
    this.getOrderStatus();
  }

  getOrderStatus() {
    this.orderStatus$ = this.manageOrderService.getOrderStatus();
  }

}
