import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { ElipsisPipe } from './compartidos/cadena.pipe';
import { SizerComponent } from './compartidos/sizer.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ElipsisPipe,
    SizerComponent,
    DinamicoComponent,
    NuevaCalculadoraComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
