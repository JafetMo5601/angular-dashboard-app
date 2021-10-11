import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as anime from 'animejs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor() {}

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  onSubmit() {
    // this.authService.authenticate(
    //   this.loginForm.controls['username'].value,
    //   this.loginForm.controls['password'].value).subscribe(
    //     data: any => {
    //       let token: any = this.get_token(data);
    //       let user_data: any = this.get_user_data(data);
    //       // this.tokenStorage.saveToken(token);
    //       // this.tokenStorage.saveUser(user_data);
    //       this.isLoginFailed = false;
    //       this.isLoggedIn = true;
    //       this.router.navigate(['/calendar']);
    //     },
    //     err: any => {
    //       this.errorMessage = err.error.message;
    //       this.isLoginFailed = true;
    //     }
    //   );
  }

  get_token(data: any) {
    return data.token;
  }

  get_user_data(data: any) {
    delete data.token;
    delete data.type;
    return data;
  }
}
