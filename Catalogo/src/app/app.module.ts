import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonServicesModule } from './common-services';
import { MainModule } from './main';
import { AjaxWaitInterceptor } from './main/ajax-wait';
import { AuthInterceptor, SecurityModule } from './security';
import { CatalogoComponent } from './app/catalogo/catalogo.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ActoresComponent } from './actores/actores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LenguajeComponent } from './lenguaje/lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    PeliculasComponent,
    ActoresComponent,
    CategoriasComponent,
    LenguajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MainModule,
    CommonServicesModule,
    SecurityModule,
    HttpClientModule,
    MyCoreModule,


  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
