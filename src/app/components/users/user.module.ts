import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';



@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddEditComponent,
    ListComponent,
  ]
})
export class UserModule { }
