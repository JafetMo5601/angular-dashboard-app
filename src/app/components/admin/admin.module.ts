import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from '../admin/auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from '../admin/auth/auth.component';
import { authInterceptorProviders } from 'src/app/shared/services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ]
      },
    ]),
  ],
  providers: [
    authInterceptorProviders
  ],
})
export class AdminModule { }
