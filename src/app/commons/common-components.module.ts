import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToggleButtonsComponent } from './components/toggle-buttons/toggle-buttons.component';
import { FormsModule } from '@angular/forms';
import { AsColorPipe } from './pipes/as-color.pipe';



@NgModule({
  declarations: [ToggleButtonsComponent, AsColorPipe],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ToggleButtonsComponent, AsColorPipe]
})
export class CommonComponentsModule { }
