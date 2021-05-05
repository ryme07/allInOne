import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';



@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    LayoutComponent,
    AddEditComponent,
    ListComponent
  ]
})
export class UserModule { }
