import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangeOrdersComponent } from './mange-orders.component';
import { ManageOrdersRoutingModule } from './manage-order-routing.module';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';



@NgModule({
  declarations: [MangeOrdersComponent, OrderReceivedComponent, OrderDetailsComponent, AllOrdersComponent],
  imports: [
    CommonModule,
    ManageOrdersRoutingModule,
    SharedModule
  ]
})
export class ManageOrdersModule { }
