import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@lessor-environment';
import { Court } from 'entity-lib';
import { Observable } from 'rxjs';

@Injectable()
export class CourtService {

    constructor(private http: HttpClient) {

    }

    fetchAll(): Observable<Court[]> {
        const url = environment.baseUrl + environment.paths.courts;
        return this.http.get<Court[]>(url);
    }
}
