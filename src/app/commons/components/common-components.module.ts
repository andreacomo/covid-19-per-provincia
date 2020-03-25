import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToggleButtonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ToggleButtonsComponent]
})
export class CommonComponentsModule { }
