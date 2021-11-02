import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as anime from 'animejs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';


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

  constructor(
    private authService: AuthService,
    private token: TokenStorageService
  ) {}

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  onSubmit() {
    this.authService.login(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value).subscribe(
        data => {
          console.log(data)
          this.token.saveToken(data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  reloadPage() {
    window.location.reload();
  }
}
