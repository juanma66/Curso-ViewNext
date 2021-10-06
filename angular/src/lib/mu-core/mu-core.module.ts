import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './componets/sizer.component';
import { PIPES_CADENA } from './pipes/cadena.pipe';


@NgModule({
  declarations: [
       SizerComponent, PIPES_CADENA,
  ],

  exports:[
    SizerComponent, PIPES_CADENA,
  ]

  ,
  imports: [
    CommonModule
  ]
})
export class MuCoreModule { }
