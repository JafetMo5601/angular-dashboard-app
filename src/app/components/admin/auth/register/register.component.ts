import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // private customPopUpService: CustomPopUpService,
    // private authService: AuthorizationService
  ) { }

  // public openCustomPopUp(message: string) {
  //   this.customPopUpService.confirm(
  //     'New user', 
  //     message
  //     );
  // }

  onSubmit() {
    console.log(
      this.signUpForm.controls['name'].value,
      this.signUpForm.controls['last'].value,
      this.signUpForm.controls['email'].value,
      this.signUpForm.controls['username'].value,
      this.signUpForm.controls['password'].value
    );
    // this.authService.register(
    //   this.signUpForm.controls['name'].value,
    //   this.signUpForm.controls['last'].value,
    //   this.signUpForm.controls['email'].value,
    //   this.signUpForm.controls['username'].value,
    //   this.signUpForm.controls['password'].value,
    //   [1]
    // ).subscribe(
    //   data => {
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.openCustomPopUp(data.message);
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
}
