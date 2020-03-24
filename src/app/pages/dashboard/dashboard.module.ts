import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { DistrictComponent } from './district/district.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { AsColorPipe } from 'src/app/commons/pipes/as-color.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, DistrictComponent, ProvincesComponent, ChartsComponent, AsColorPipe],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    FormsModule
  ]
})
export class DashboardModule { }
