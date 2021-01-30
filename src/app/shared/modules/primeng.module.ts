import { NgModule } from "@angular/core";


import {ButtonModule} from 'primeng/button';
import {OrderListModule} from 'primeng/orderlist';




@NgModule({
    exports: [ButtonModule , OrderListModule]
})

export class PrimeNgModule{}