import { Component, OnInit } from '@angular/core';
import { ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-reday-to-serve',
  templateUrl: './order-reday-to-serve.component.html',
  styleUrls: ['./order-reday-to-serve.component.scss']
})
export class OrderRedayToServeComponent implements OnInit {
  header: string = 'List of all preparingorders';
  status: string = ORDERSTATUS.READYTOSERVE;
  constructor() { }

  ngOnInit() {
  }

}
