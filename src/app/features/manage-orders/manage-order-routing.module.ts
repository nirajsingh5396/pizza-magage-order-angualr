import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangeOrdersComponent } from './mange-orders.component';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderPreparingComponent } from './pages/order-preparing/order-preparing.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';


const routes: Routes = [
    {
        path: '',
        component: MangeOrdersComponent,
        children: [
            { path: '', redirectTo: 'all-orders', pathMatch: 'full' },
            { path: 'all-orders', component: AllOrdersComponent },
            { path: 'order-received', component: OrderReceivedComponent },
            { path: 'order-preparing', component: OrderPreparingComponent },
            { path: 'order-received', component: OrderReceivedComponent },
            { path: 'order-received', component: OrderReceivedComponent },
            { path: 'order-details/:id', component: OrderDetailsComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageOrdersRoutingModule { }
