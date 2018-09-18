import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DateRangePicker } from '../shared/date-range-picker';
import { EchartsMapComponent } from './echarts-map/echarts-map.component';
import { AppRoutingModule } from './/app-routing.module';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { EchartsEasyComponent } from './echarts-easy/echarts-easy.component';
import { ScriptService } from '../shared/script/script.service';

@NgModule({
  declarations: [
    AppComponent,
    DateRangePicker,
    EchartsMapComponent,
    DateRangePickerComponent,
    EchartsEasyComponent
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [
    ScriptService
  ],
  bootstrap: [AppComponent],
  exports: [
    DateRangePicker
  ]
})
export class AppModule { }
