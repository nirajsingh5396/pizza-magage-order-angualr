import { NgModule } from "@angular/core";


import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { TooltipModule } from 'primeng/tooltip'




@NgModule({
    exports: [ButtonModule, OrderListModule, TooltipModule]
})

export class PrimeNgModule { }