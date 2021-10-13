import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MuCoreModule } from 'src/lib/mu-core';
import { CommonServicesModule } from '../common-services';
import { CONTACTOS_COMPONENTES } from './componente.component';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],

  exports:[
    CONTACTOS_COMPONENTES,
  ],

  imports: [
      CommonModule,FormsModule,RouterModule.forChild([]),
      MuCoreModule,CommonServicesModule

  ]
})

export class ContactoModule { }
