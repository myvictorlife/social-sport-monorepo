import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@lessor-environment';
import { LessorUser } from 'entity-lib';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient) {

    }

    fetch(): Observable<LessorUser> {
        const url = environment.baseUrl + environment.paths.sportCenter;
        return this.http.get<LessorUser>(url);
    }
}
