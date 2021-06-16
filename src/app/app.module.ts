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
import { AlertComponent } from './module/alert/alert.component';
import { TextsComponent } from './page/texts/texts.component';
import { CrudComponent } from './components/crud/crud.component';
import { SelectDropdownComponent } from './module/select-dropdown/select-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './module/spinner/spinner.component';
import { HelloComponent } from './components/hello/hello.component';
import { CompoOutletComponent } from './components/compo-outlet/compo-outlet.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ExpansionComponent } from './page/expansion/expansion.component';

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
    ChildComponent,
    AlertComponent,
    TextsComponent,
    CrudComponent,
    SelectDropdownComponent,
    SpinnerComponent,
    HelloComponent,
    CompoOutletComponent,
    AccordionComponent,
    ExpansionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
