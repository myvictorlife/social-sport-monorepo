import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Login {
  email: string,
  password: string;
}

@Component({
  selector: 'auth-authLib',
  templateUrl: 'auth-lib.component.html',
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {

  loginForm: FormGroup;
  @Output() loginFormChange = new EventEmitter<Login>();

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    
  }

  doLogin() {
    const loginRequest = this.loginForm.getRawValue();
    console.log(loginRequest);
    this.loginFormChange.emit(loginRequest);
  }

}
