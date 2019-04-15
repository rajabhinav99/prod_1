import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorpageComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
