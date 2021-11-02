import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { AuthInterceptor, SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjaxWaitInterceptor } from './main/ajax-wait';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { CategoriaModule } from './categoria';
import { IdiomaModule } from './idioma';
import { ActorModule } from './actor';
import { PeliculasModule } from './peliculas';


@NgModule({
  declarations: [
    AppComponent,
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
    CategoriaModule,
    IdiomaModule,
    ActorModule,
    PeliculasModule,

  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
