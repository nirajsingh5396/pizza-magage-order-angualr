import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrders } from '../../../models/orders.model';

@Component({
  selector: 'app-received-item',
  templateUrl: './received-item.component.html',
  styleUrls: ['./received-item.component.scss']
})
export class ReceivedItemComponent implements OnInit {

  @Input() orderStatus$: Observable<string[]>;
  @Input() order: IOrders[]

  constructor() { }

  ngOnInit() {
  }

}
