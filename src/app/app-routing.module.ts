import { TextsComponent } from './page/texts/texts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { SomethingComponent } from './page/something/something.component';

const usersModule = () => import('./components/users/user.module').then(x => x.UserModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'something', component: SomethingComponent },
  { path: 'texts', component: TextsComponent },
  { path: 'users', loadChildren: usersModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
