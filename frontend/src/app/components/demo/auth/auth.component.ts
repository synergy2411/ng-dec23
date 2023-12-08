import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  // username = new FormControl();
  // password = new FormControl();
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        AuthComponent.exclamationValidator,
      ]),
    });
  }

  ngOnInit(): void {}

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }
  onLogin() {
    console.log(this.authForm);
  }

  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    // console.log(control);
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamationError: true };
  }
}
