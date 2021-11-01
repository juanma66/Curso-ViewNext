import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENA } from './pipes/cadena.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { VALIDADORES_ERROR_MESSAGE } from './directives/show_errors.directive';



@NgModule({
  declarations: [
       SizerComponent, PIPES_CADENA, DIRECTIVAS_ATRIBUTO,MIS_VALIDADORES,UnlessDirective, VALIDADORES_ERROR_MESSAGE,
  ],

  exports:[
    SizerComponent, PIPES_CADENA, DIRECTIVAS_ATRIBUTO,MIS_VALIDADORES,UnlessDirective, VALIDADORES_ERROR_MESSAGE,
  ]

  ,
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
