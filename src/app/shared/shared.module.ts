import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NoDataComponent } from './components/no-data/no-data.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { MaterialModule } from './modules/material-module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



@NgModule({
  declarations: [
    NoDataComponent,
    UserFilterPipe,
    UserProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NoDataComponent,
    UserProfileComponent,
    UserFilterPipe,
    MaterialModule
  ],
  providers: []
})
export class SharedModule { }
