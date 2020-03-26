import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvincesDashboardComponent } from './provinces-dashboard/provinces-dashboard.component';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { DistrictComponent } from './provinces-dashboard/district/district.component';
import { ProvincesComponent } from './provinces-dashboard/provinces/provinces.component';
import { ChartsComponent } from './provinces-dashboard/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'src/app/commons/common-components.module';


@NgModule({
  declarations: [ProvincesDashboardComponent, DistrictComponent, ProvincesComponent, ChartsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    CommonComponentsModule
  ]
})
export class ProvincesModule { }
