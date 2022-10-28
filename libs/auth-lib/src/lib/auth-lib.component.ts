import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest, LoginResponse } from 'entity-lib';
import { catchError, map, of } from 'rxjs';
import { AuthLibService } from './auth-lib.service';

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
  @Input() url: string = '';
  @Output() loginFormChange = new EventEmitter<LoginResponse>();

  constructor(private authService: AuthLibService) {
    this.loginForm = new FormGroup({
      username: new FormControl('wakepark'),
      password: new FormControl('486192')
    });
  }

  ngOnInit(): void {
    
  }

  doLogin() {
    const loginRequest = this.loginForm.getRawValue();
    this.authService.doLogin(this.url, loginRequest).pipe(
      map((loginResponse) => this.loginFormChange.emit(loginResponse)),
      catchError((error) => {
        const loginResponse = { } as LoginResponse;
        loginResponse.error = error;
        return of(this.loginFormChange.emit(loginResponse));
      })
    ).subscribe();
  }

}
