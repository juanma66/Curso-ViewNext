import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { VALIDADORES_ERROR_MESSAGE } from './directives/show_errors.directive';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective, VALIDADORES_ERROR_MESSAGE,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective, VALIDADORES_ERROR_MESSAGE,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
