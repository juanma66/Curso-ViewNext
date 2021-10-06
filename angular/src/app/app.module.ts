import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';
import { MuCoreModule } from 'src/lib/mu-core';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { CommonServicesModule } from './common-services';


@NgModule({
  declarations: [
    AppComponent,

    DemosComponent,
    DinamicoComponent,
    NuevaCalculadoraComponent,
  ],

  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MuCoreModule, MainModule, CommonServicesModule, SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
