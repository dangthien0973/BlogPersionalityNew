import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { catchError } from "rxjs/operators";
import { Route } from '@angular/router';
import { SYSTEM_CONTAIN } from '../Enum/systemEnum';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router : Route){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        return handleRouter()



        function handleRouter() {
            switch(true){
                case url.endsWith("api/Login") && method == 'POST' : 
                return authenticate();
                default :
                return next.handle(request);
            }
        }
        
        function authenticate(){
            let currentUser = JSON.parse(localStorage.getItem(SYSTEM_CONTAIN.AUTH_USER));
            if(currentUser && currentUser.token)
            {
            var pageUrl=window.location.href;    
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                    RequestedUrl: pageUrl
            }
            });
        }
        return next.handle(request).pipe(
            catchError((err : HttpErrorResponse) => {
                if (this.router.url !== "/login" && err.status === 401) {
                    console.log('JwtInterceptor 401 status')
                    this.router.navigate(["/api/Login"]);
                }
                if (err.status == 403) {
                    this.router.navigate(["/error/error403"]);
                }
                return throwError(err)
            })
       
        )
    }
}
}