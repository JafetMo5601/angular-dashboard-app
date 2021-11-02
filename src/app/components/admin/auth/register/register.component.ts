import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  signUpForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required
    }),
    last: new FormControl('', {
      validators: Validators.required
    }),
    username: new FormControl('', {
      validators: Validators.required
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService
  ) { }

  // public openCustomPopUp(message: string) {
  //   this.customPopUpService.confirm(
  //     'New user', 
  //     message
  //     );
  // }

  onSubmit() {
    this.authService.register(
      this.signUpForm.controls['name'].value,
      this.signUpForm.controls['last'].value,
      this.signUpForm.controls['email'].value,
      this.signUpForm.controls['username'].value,
      this.signUpForm.controls['password'].value
    ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }, err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(this.errorMessage);
      }
    );
  }
}
