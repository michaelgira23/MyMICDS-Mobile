import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  loginForm: any;

  constructor(form: FormBuilder) {
    // Create a form group
    this.loginForm = form.group({
      // All inputs are required
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Fires when form submitted
  login(event) {
    event.preventDefault();
    console.log(this.loginForm.value);
  }
}
