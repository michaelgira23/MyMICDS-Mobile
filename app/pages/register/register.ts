import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';

@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {
  registerForm: any;

  constructor(form: FormBuilder) {
    // Create a form group
    this.registerForm = form.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
      firstName: ['', Validators.required],
      lastName : ['', Validators.required]
    });
  }

  // Fires when form submitted
  register(event) {
    event.preventDefault();
    console.log(this.registerForm.value);
  }
}
