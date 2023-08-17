import { Injectable } from '@angular/core';
import { SYSTEM_CONTAIN } from 'src/app/Enum/systemEnum';
import { BlogAPIService } from './BlogAPIService';
import { Observable } from 'rxjs';
import { map, delay, catchError,shareReplay } from 'rxjs/operators';
@Injectable({
	providedIn:'root'
})
export class AuthenService {
    userStorage : string = SYSTEM_CONTAIN.AUTH_USER;
	public user: UserInfo;

	constructor( private api :BlogAPIService){

	}
    login(username: string , password : string ) :Observable<any>{
		return this.api.post("/api/Login", {username : username,password : password }).pipe(
			map(data => {
				if(data.success){
				localStorage.setItem(this.userStorage, JSON.stringify(data.data));
				return {status: true}
				}
				else {
					return {status :false}
				}

			})
		
		)
	}
}
export class UserInfo {

}