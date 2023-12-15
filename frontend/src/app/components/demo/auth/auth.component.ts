import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  // username = new FormControl();
  // password = new FormControl();
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        AuthComponent.exclamationValidator,
      ]),
      cnfPassword: new FormControl('', [
        AuthComponent.confirmPasswordValidator,
        Validators.required,
      ]),
      languages: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.authForm.get('cnfPassword') as FormControl;
  }

  get languages() {
    return this.authForm.get('languages') as FormArray;
  }

  onLogin() {
    const { username: email, password } = this.authForm.value;
    // debugger;
    this.authService.onLogin(email, password);
  }

  onAddLanguage() {
    this.languages.push(
      this.fb.group({
        langName: '',
        langExperience: '',
      })
    );
  }

  onDeleteLanguage(index: number) {
    this.languages.removeAt(index);
  }

  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    // console.log(control);
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamationError: true };
  }

  static confirmPasswordValidator(control: AbstractControl) {
    // console.log(control.parent);
    if (control.parent) {
      console.log(control.parent.controls['password'].value);
      return control.parent.controls['password'].value === control.value
        ? null
        : { confirmPasswordError: true };
    }
    return null;
  }

  onRegister() {
    const { username: email, password } = this.authForm.value;
    this.authService
      .onRegister(email, password)
      .then((userCred) => {
        console.log('SUCCES ', userCred);
      })
      .catch(console.error);
  }
}
