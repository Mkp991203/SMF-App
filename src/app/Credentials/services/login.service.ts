import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl= "http://localhost:3000/login"
  constructor( private httpClient:HttpClient) { }

  getlogin(data:Login):Observable<any>{
    return this.httpClient.post(this.baseUrl,data)
  }
}
