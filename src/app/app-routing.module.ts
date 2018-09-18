import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartsMapComponent } from './echarts-map/echarts-map.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { EchartsEasyComponent } from './echarts-easy/echarts-easy.component';

const routes: Routes = [
  { path: 'map', component: EchartsMapComponent },
  { path: 'date-range-picker', component: DateRangePickerComponent },
  { path: 'map-v2', component: EchartsEasyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class AppRoutingModule {

}
