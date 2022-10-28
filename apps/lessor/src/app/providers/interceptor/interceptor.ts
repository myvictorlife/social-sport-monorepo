import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorProvider implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const cloneReq = this.addToken(req, token);
        return next.handle(cloneReq);
    }

    private addToken(request: HttpRequest<any>, token: any) {
        if (token) {
            const clone = request.clone({
                setHeaders: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Accept: `application/json`,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': `application/json`,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Authorization: `Bearer ${token}`
                }
            });
            return clone;
        }
        return request;
    }

}
