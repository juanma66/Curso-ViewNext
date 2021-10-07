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


@NgModule({
  declarations: [
    AppComponent,

    DemosComponent,
    DinamicoComponent,
    NuevaCalculadoraComponent,
    FormularioComponent,
  ],

  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MuCoreModule, MainModule, CommonServicesModule, SecurityModule,
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
