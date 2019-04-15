import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'editproduct', component: EditproductComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
