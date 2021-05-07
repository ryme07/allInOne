import { UserComponent } from './../../page/user/user.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }