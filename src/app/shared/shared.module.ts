import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NoDataComponent } from './components/no-data/no-data.component';
import { MaterialModule } from './modules/material-module';
import { UserProfileComponent } from './components/user-profile-menu-items/user-profile.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PrimeNgModule } from './modules/primeng.module';
import { NotificationService } from './services/notification.service';



@NgModule({
  declarations: [
    NoDataComponent,
    UserProfileComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NoDataComponent,
    UserProfileComponent,
    MaterialModule,
    ShortenPipe,
    PrimeNgModule
  ],
  providers: [NotificationService]
})
export class SharedModule { }
