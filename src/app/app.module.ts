import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { fakeBackendProvider } from './helpers';
import { ErrorInterceptor } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './module/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';

import { SomethingComponent } from './page/something/something.component';
import { ColorBtnComponent } from './module/color-btn/color-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { RainbowDirective } from './directives/rainbow.directive';
import { MouseMoveDirective } from './directives/mouse-move.directive';
import { UserComponent } from './page/user/user.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    SomethingComponent,
    ColorBtnComponent,
    RainbowDirective,
    MouseMoveDirective,
    UserComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
