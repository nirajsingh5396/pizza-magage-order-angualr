import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangeOrdersComponent } from './mange-orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';


const routes: Routes = [
    {
        path: '',
        component: MangeOrdersComponent,
        children: [
            { path: '', redirectTo: 'order-received', pathMatch: 'full' },
            { path: 'order-received', component: OrderReceivedComponent },
        ]
    },
    { path: ':id', component: OrderDetailsComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageOrdersRoutingModule { }
