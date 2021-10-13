import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';
import { LoggerService, MuCoreModule } from 'src/lib/mu-core';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { CommonServicesModule } from './common-services';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { FormButtonsComponent } from './common-component/form-buttons/form-buttons.component';
import { ShowErrorsMessageComponent } from './common-component/show-errors-message/show-errors-message.component';
import { CommonModule } from '@angular/common';
import { CommonComponentModule } from './common-component/common-component.module';
import {HttpClientModule} from '@angular/common/http';
import { ContactoModule } from './contacto/contacto.module';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    NuevaCalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,

  ],

  imports: [
    BrowserModule, FormsModule,
    CommonComponentModule,
    AppRoutingModule, MuCoreModule, MainModule, CommonServicesModule, SecurityModule,MainModule,
    HttpClientModule,ContactoModule
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
