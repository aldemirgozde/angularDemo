import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import {Provider} from '../models/provider';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentuser:UserLoginComponent=null;
  public users=[];

  authUrl="http://localhost:8080/userlogin";
  userUrl="http://localhost:8080/userregister";

  authUrlPro="http://localhost:8080/providerlogin";
  proUrl="http://localhost:8080/providerregister";
  //confirmEmailUrl;

  constructor(private http:HttpClient) { 
   
  }

  public loginUserFromRemote(user:User):Observable<any>
{
  return this.http.post<any>(this.authUrl,user)
}

public register(user:User):Observable<any>
{
  return this.http.post<any>(this.userUrl,user)
}

public loginProvider(pro:Provider):Observable<any>
{
  return this.http.post<any>(this.authUrlPro,pro)
}

handleError(error: Response){

}

}
