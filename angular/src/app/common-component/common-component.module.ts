import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { ShowErrorsMessageComponent } from './show-errors-message/show-errors-message.component';



@NgModule({
  declarations: [
    FormButtonsComponent,ShowErrorsMessageComponent,
  ],

  exports:[
    FormButtonsComponent,ShowErrorsMessageComponent,
  ],


  imports: [
    CommonModule
  ]


})
export class CommonComponentModule { }
