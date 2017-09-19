import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import * as moment from 'moment';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // FormControl
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthYearCtrl: FormControl;
  registrationFailed: boolean;

  // FormGroup
  userForm: FormGroup;
  passwordForm: FormGroup;

  constructor(formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginCtrl = formBuilder.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = formBuilder.control('', Validators.required);
    this.birthYearCtrl = formBuilder.control('', [Validators.required, RegisterComponent.validYear]);

    this.passwordForm = formBuilder.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, {validator: RegisterComponent.passwordMatch});

    this.userForm = formBuilder.group({
      login: this.loginCtrl,
      passwordForm: this.passwordForm,
      birthYear: this.birthYearCtrl
    });
  }

  static passwordMatch(formGroup: FormGroup): ValidationErrors {
    const pass = formGroup.get('password').value;
    const pass2 = formGroup.get('confirmPassword').value;

    if (pass === pass2) {
      return null;
    } else {
      return {matchingError: true};
    }
  }

  static validYear(formControl: FormControl): ValidationErrors {
    const birthYear = formControl.value;
    const currentYear = new Date().getFullYear();

    if (moment(birthYear).isBetween(1900, currentYear + 1)) {
      return null;
    } else {
      return {invalidYear: true};
    }
  }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.loginCtrl.value, this.passwordCtrl.value, this.birthYearCtrl.value).subscribe(
      resp => {
        // Registration passed
        this.router.navigate(['/']);
      },
      err => {
        // Registration failed
        this.registrationFailed = true;
      });
  }

}
