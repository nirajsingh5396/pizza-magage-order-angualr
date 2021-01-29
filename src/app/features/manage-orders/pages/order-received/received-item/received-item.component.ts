import { SelectionChange } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { Observable } from 'rxjs';
import { IOrders } from '../../../models/orders.model';

@Component({
  selector: 'app-received-item',
  templateUrl: './received-item.component.html',
  styleUrls: ['./received-item.component.scss']
})
export class ReceivedItemComponent implements OnInit {

  @Input() orderStatusBtn: string[];
  @Input() order: IOrders[];
  @Output() statusChangedEvent: EventEmitter<IOrders> = new EventEmitter<IOrders>();

  constructor() { }

  ngOnInit() {
  }

  changeStatus(status: string, order: IOrders) {
    order.orderStatus = status
    this.statusChangedEvent.next(order);
  }

}
