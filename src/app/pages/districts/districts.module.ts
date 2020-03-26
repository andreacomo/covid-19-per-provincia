import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DistrictsDashboardComponent } from './districts-dashboard/districts-dashboard.component';
import { DistrictsComponent } from './districts/districts-dashboard/districts/districts.component';
import { CommonComponentsModule } from 'src/app/commons/common-components.module';
import { AsColorPipe } from 'src/app/commons/pipes/as-color.pipe';



@NgModule({
  declarations: [DistrictsDashboardComponent, DistrictsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    CommonComponentsModule
  ]
})
export class DistrictsModule { }
