import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DistrictsDashboardComponent } from './districts-dashboard/districts-dashboard.component';



@NgModule({
  declarations: [DistrictsDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    FormsModule
  ]
})
export class DistrictsModule { }
