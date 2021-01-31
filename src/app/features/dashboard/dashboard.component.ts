import { Component, OnInit } from '@angular/core';
import { PIECHARTINFO } from 'src/app/shared/helpers/constant';
import { ManageOrdersService } from 'src/app/shared/services/manage-orders.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

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
    private notificationService: NotificationService
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

  getStatusData(event) {
    console.log(event);
  }

}
