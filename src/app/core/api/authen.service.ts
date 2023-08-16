import { Injectable } from '@angular/core';
import { SYSTEM_CONTAIN } from 'src/app/Enum/systemEnum';
import { BlogAPIService } from './BlogAPIService';
import { Observable } from 'rxjs';
@Injectable({
	providedIn:'root'
})
export class AuthenService {
    userStorage : string = SYSTEM_CONTAIN.AUTH_USER;
	public user: UserInfo;

	constructor( private api :BlogAPIService){

	}
    login(username: string , password : string ) :Observable<any>{
		return this.api.post("/Login", {username : username,password : password }).pipe(
			map(data=> {

			})
		
		)
	}
}
export class UserInfo {

}