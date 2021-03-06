import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvincesModule } from './pages/provinces/provinces.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './commons/material/material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { DistrictsModule } from './pages/districts/districts.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProvincesModule,
    DistrictsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
