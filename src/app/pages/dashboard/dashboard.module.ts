import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { DistrictComponent } from './district/district.component';



@NgModule({
  declarations: [DashboardComponent, DistrictComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }
