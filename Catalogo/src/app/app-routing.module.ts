import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main';
import { RegisterUserComponent } from './security';

const routes: Routes = [

  {path:'', pathMatch:'full',component:HomeComponent},
  {path: 'inicio',component: HomeComponent},

 { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
 {path: 'registro', component:RegisterUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
