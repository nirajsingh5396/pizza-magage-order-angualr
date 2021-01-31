import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dasboard',
                pathMatch:'full'
            },
            {
                path:'dasboard',
                loadChildren: ()=>import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'manage-orders',
                loadChildren: () => import('../features/manage-orders/manage-orders.module').then(m => m.ManageOrdersModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
