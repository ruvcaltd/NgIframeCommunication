import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [
  { path: 'page1', component: PageOneComponent },
  { path: 'page2', component: PageTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

