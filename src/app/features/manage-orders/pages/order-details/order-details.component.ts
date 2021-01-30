import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ManageOrdersService } from '../../manage-orders.service';
import { IOrders } from '../../models/orders.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrders = null;
  selectedIndex: number = 0;
  status: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private manageOrderService: ManageOrdersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadorderDetails(id);
  }

  loadorderDetails(id: number) {
    const order$ = this.manageOrderService.getOrderById(id);
    const status$ = this.manageOrderService.getTimelineStatus();
    forkJoin([order$, status$]).subscribe((res) => {
      this.order = res[0];
      this.status = res[1];
      /**
       * Finding selected index for showing current status of timeline in stepper
       */
      this.selectedIndex = this.status.findIndex(x => x === this.order.orderStatus);
    }, (err) => {
      this.notificationService.showNotification('Something went wrong', 'bottom', 'error')
    });

  }

  changeStatus(timeLineEvent: StepperSelectionEvent, order: IOrders) {
    this.manageOrderService.changeOrderStatus(order, this.status[timeLineEvent.selectedIndex])
      .subscribe((res) => {
        if (res.status === 'success') {
          this.notificationService.showNotification(`${res.message}`, 'top', 'green-snackbar')
        }
      });
  }

}
