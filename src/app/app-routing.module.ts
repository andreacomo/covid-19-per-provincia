import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvincesDashboardComponent } from './pages/provinces/provinces-dashboard/provinces-dashboard.component';
import { DistrictsDashboardComponent } from './pages/districts/districts-dashboard/districts-dashboard.component';


const routes: Routes = [
  {
    path: 'provinces',
    component: ProvincesDashboardComponent,
    data: {
      label: 'Province'
    }
  },
  {
    path: 'districts',
    component: DistrictsDashboardComponent,
    data: {
      label: 'Regioni'
    }
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
