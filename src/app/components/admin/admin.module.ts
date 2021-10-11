import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from '../admin/auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from '../admin/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: AuthComponent,
        children: [
          { path: 'login', component: RegisterComponent },
          { path: 'register', component: RegisterComponent },
        ]
      },
    ]),
  ]
})
export class AdminModule { }
