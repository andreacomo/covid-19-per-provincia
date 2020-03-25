import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvincesDashboardComponent } from './pages/provinces/provinces-dashboard/provinces-dashboard.component';


const routes: Routes = [
  {
    path: 'provinces',
    component: ProvincesDashboardComponent
  },
  {
    path: '',
    redirectTo: '/provinces',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
