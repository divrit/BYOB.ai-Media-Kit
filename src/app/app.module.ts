import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { Template1Component } from './template1/template1.component';
import { MonthComponent } from './month/month.component';
import { MonthsComponent } from './months/months.component';
import { TableComponent } from './table/table.component';
import { NumberToMonthPipe } from './Pipes/number-to-month.pipe';
import { MonthToNumberPipe } from './Pipes/month-to-number.pipe';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    Template1Component,
    MonthComponent,
    MonthsComponent,
    TableComponent,
    NumberToMonthPipe,
    MonthToNumberPipe,
    SideNavComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
