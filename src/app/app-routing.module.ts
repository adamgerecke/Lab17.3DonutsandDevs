import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutComponent } from './donut/donut.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

const routes: Routes = [
  { path : "donuts", component: DonutComponent},
  { path : "donutdetails/:id", component: DonutDetailComponent},
  { path : "computerhof", component: FamousPeopleComponent},
  { path : "famousperson", component: FamousPersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
