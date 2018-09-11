import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DateRangePickerComponent } from '../shared/date-range-picker';

@NgModule({
  declarations: [
    AppComponent,
    DateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DateRangePickerComponent
  ]
})
export class AppModule { }
