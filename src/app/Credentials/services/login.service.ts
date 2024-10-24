import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl= "http://localhost:3000/login"
  private registerUrl= "http://localhost:3000/register"

  constructor( private httpClient:HttpClient) { }

  getlogin(data:Login):Observable<any>{
    return this.httpClient.post(this.baseUrl,data)
  }

  getchecked(email:string):Observable<boolean>{
    return this.httpClient.get<any>(this.registerUrl + '?email=' +email).pipe(
      map(val => val.length>0)
    )
  }

  getregister(data:any):Observable<any>{
    return this.httpClient.post(this.registerUrl,data)
  }
}
