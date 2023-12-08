import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
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
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  onLogin() {
    console.log(this.authForm);
  }
}
