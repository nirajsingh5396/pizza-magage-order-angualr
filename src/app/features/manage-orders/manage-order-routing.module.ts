import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangeOrdersComponent } from './mange-orders.component';
import { OrderPreparingComponent } from './pages/order-preparing/order-preparing.component';
import { OrderReadyToServeComponent } from './pages/order-ready-to-serve/order-ready-to-serve.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';


const routes: Routes = [
    {
        path: '',
        component: MangeOrdersComponent,
        children: [
            { path: '', redirectTo: 'order-received', pathMatch: 'full' },
            { path: 'order-received', component: OrderReceivedComponent },
            { path: 'order-preparing', component: OrderPreparingComponent },
            { path: 'order-reday-to-serve', component: OrderReadyToServeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageOrdersRoutingModule { }
