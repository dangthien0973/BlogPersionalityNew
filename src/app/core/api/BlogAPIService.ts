import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse , HttpErrorResponse} from "@angular/common/http";
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, delay, catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
@Injectable({
	providedIn:'root'
})
export class BlogAPIService {
	constructor(private http :HttpClient)
	{
		
	}
	private get hearder(){
		return new HttpHeaders(
			{
			'Content-Type': 'application/json',
			}
		)
	}
public getUrl(url :any){
return environment.HOST_URL +url;
}


public get<T=any>(url): Observable<T> {
	return this.http.get<T>(this.getUrl(url),{ headers: this.hearder }).pipe(
		delay(10),
		map((data: T) => (data as T)),
		catchError(this.handleError)
	);
}

public post(url: string , body :any):Observable<any>
{
     let _url = this.getUrl(url);
	 let data = JSON.stringify(body);
	 return this.http.post(url,data,{  headers: this.hearder }).pipe(
		delay(10),
		map((data: any) => (data)),
		catchError(this.handleError)
	 )

}




private handleError(error: HttpErrorResponse) 
{
error.status ===0  ? console.error('An error occurred:', error.error) : console.error('An error oucred you can see detail');
return throwError(()=> new Error('Some thing bad has happend , Please try again later!'));
}
}