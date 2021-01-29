import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangeOrdersComponent } from './mange-orders.component';
import { ManageOrdersRoutingModule } from './manage-order-routing.module';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceivedItemComponent } from './pages/received-item/received-item.component';



@NgModule({
  declarations: [MangeOrdersComponent, OrderReceivedComponent, ReceivedItemComponent],
  imports: [
    CommonModule,
    ManageOrdersRoutingModule,
    SharedModule
  ]
})
export class ManageOrdersModule { }
