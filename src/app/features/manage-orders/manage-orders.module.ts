import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangeOrdersComponent } from './mange-orders.component';
import { ManageOrdersRoutingModule } from './manage-order-routing.module';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { OrderPreparingComponent } from './pages/order-preparing/order-preparing.component';
import { OrderReadyToServeComponent } from './pages/order-ready-to-serve/order-ready-to-serve.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MangeOrdersComponent, OrderReceivedComponent, OrderPreparingComponent, OrderReadyToServeComponent],
  imports: [
    CommonModule,
    ManageOrdersRoutingModule,
    SharedModule
  ]
})
export class ManageOrdersModule { }
