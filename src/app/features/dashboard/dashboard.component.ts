import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PIECHARTINFO } from 'src/app/shared/helpers/constant';
import { ManageOrdersService } from 'src/app/shared/services/manage-orders.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ORDERSTATUS } from '../manage-orders/models/orders.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Order status';
  type = 'PieChart';
  data = [];
  columnNames = PIECHARTINFO.columnNames
  width = PIECHARTINFO.width;
  height = PIECHARTINFO.height;

  constructor(
    private manageOrderService: ManageOrdersService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPipeChartData();
  }

  getPipeChartData() {
    this.manageOrderService.getOrderStatusForPieChart()
      .subscribe((datas) => {
        console.log(datas);
        this.data = datas;
      }, (err) => this.notificationService.showNotification('Something went wrong', 'bottom', 'error'));
  }

  getStatusData(event: any[]) {
    if (this.data[event[0].row][0] === ORDERSTATUS.RECEIVED) {
      this.router.navigate(['/layout/manage-orders/order-received']);
    } else if (this.data[event[0].row][0] === ORDERSTATUS.PREPARING) {
      this.router.navigate(['/layout/manage-orders/order-preparing']);
    } else {
      this.router.navigate(['/layout/manage-orders/order-ready-to-serve']);
    }
  }

}
