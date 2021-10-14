import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosAddComponent, ContactosComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contacto/componente.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';

const routes: Routes = [
  {path:'', pathMatch:'full',component:HomeComponent},
  {path: 'inicio',component: HomeComponent},
  {path:'demos', component:HomeComponent},
  {path:'demos', component:HomeComponent},
  {path:'chime/de/hacer/numero', component:NuevaCalculadoraComponent},
  {path:'contactos',component:ContactosListComponent},
  {path:'contactos/:add',component:ContactosAddComponent},
  {path:'contactos/:id/edit',component:ContactosEditComponent},
  {path:'contactos/:id',component:ContactosViewComponent},
  {path:'contactos/:id/:kk',component:ContactosViewComponent},
  {path:'antonie/hasted',redirectTo:'/contatos/27'},
  {path:'404.html',component:PageNotFoundComponent},
  {path:'*',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
