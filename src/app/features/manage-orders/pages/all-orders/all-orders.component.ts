import { Component, OnInit } from '@angular/core';
import { ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  header: string = 'List odf all orders'
  status: string = 'all'
  constructor() { }

  ngOnInit() {
  }

}
