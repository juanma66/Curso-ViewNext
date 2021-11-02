import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
  ],
  exports: [ LoginComponent, RegisterUserComponent ],
})
export class SecurityModule { }
