import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageOrdersService } from '../../manage-orders.service';
import { IOrders } from '../../models/orders.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrders = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private manageOrderService: ManageOrdersService
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getOrderById(id);
  }

  getOrderById(id: number) {
    this.manageOrderService.getOrderById(id)
      .subscribe((order) => { this.order = order}, (err) => { alert('something went wrong') });
  }

}
