import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {Users} from '../../providers/users/users';

@Component({
  templateUrl: 'build/pages/register/register.html',
  providers: [Users]
})
export class RegisterPage {
  registerForm: any;
  gradeRange: any;

  constructor(form: FormBuilder, private users: Users) {
    // Create a form group
    this.registerForm = form.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
      firstName: ['', Validators.required],
      lastName : ['', Validators.required],
      teacher  : [],
      gradYear : []
    });

    // Get class years
    let that = this;
    this.gradeRange = null;
    this.users.getGradeRange()
      .then(function(gradYears) {
        console.log(gradYears);
        that.gradeRange = gradYears;
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // Fires when form submitted
  register(event) {
    event.preventDefault();
    console.log(this.registerForm.value);
  }
}
