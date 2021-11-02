import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './componets/sizer.component';
import { PIPES_CADENA } from './pipes/cadena.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { UnlessDirective } from './directives/estructurales.directive';



@NgModule({
  declarations: [
       SizerComponent, PIPES_CADENA, DIRECTIVAS_ATRIBUTO,MIS_VALIDADORES,UnlessDirective,
  ],

  exports:[
    SizerComponent, PIPES_CADENA, DIRECTIVAS_ATRIBUTO,MIS_VALIDADORES,UnlessDirective,
  ]

  ,
  imports: [
    CommonModule
  ]
})
export class MuCoreModule { }