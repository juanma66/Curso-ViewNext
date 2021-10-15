import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent, BlogEditComponent, BlogListComponent, BlogViewComponent } from './blog/componente.component';
import { ContactosAddComponent, ContactosComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contacto/componente.component';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { NuevaCalculadoraComponent } from './nueva-calculadora/nueva-calculadora.component';

const routes: Routes = [
  {path:'', pathMatch:'full',component:HomeComponent},
  {path: 'inicio',component: HomeComponent},
  {path:'demos', component: DemosComponent},
  {path:'chisme/de/hacer/numeros', component: NuevaCalculadoraComponent},

  { path: 'contactos', children: [
    { path: '', component: ContactosListComponent},
    { path: 'add', component: ContactosAddComponent},
    { path: ':id/edit', component: ContactosEditComponent},
    { path: ':id', component: ContactosViewComponent},
    { path: ':id/:kk', component: ContactosViewComponent},
    ]},
    { path: 'blog', children: [
      { path: '', component: BlogListComponent},
      { path: 'add', component: BlogAddComponent},
      { path: ':id/edit', component: BlogEditComponent},
      { path: ':id', component: BlogViewComponent},
      { path: ':id/:kk', component: BlogViewComponent},
      ]},
  { path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path:'404.html',component:PageNotFoundComponent},
  { path: '**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
