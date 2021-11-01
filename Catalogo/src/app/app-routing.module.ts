import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './main';
import { RegisterUserComponent } from './security';

const routes: Routes = [

  { path:'', pathMatch:'full',component:HomeComponent},
  { path: 'inicio',component: HomeComponent},
  { path: 'registro', component: RegisterUserComponent },
  { path: '404.html', component: PageNotFoundComponent, },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
