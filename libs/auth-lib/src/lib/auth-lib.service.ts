import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from 'entity-lib';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthLibService {

  constructor(private http: HttpClient) { }

  doLogin(url: string, body: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(url, body).pipe(map((response: LoginResponse) => response));
  }
}
