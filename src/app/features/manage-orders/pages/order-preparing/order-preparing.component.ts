import { Component, OnInit } from '@angular/core';
import { ORDERSTATUS } from '../../models/orders.model';

@Component({
  selector: 'app-order-preparing',
  templateUrl: './order-preparing.component.html',
  styleUrls: ['./order-preparing.component.scss']
})
export class OrderPreparingComponent implements OnInit {
  header: string = 'List of all preparingorders';
  status: string = ORDERSTATUS.PREPARING;
  constructor() { }

  ngOnInit() {
  }

}
