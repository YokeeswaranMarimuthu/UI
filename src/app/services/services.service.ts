import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient){}

  signUpUser(data:any){
    return this.http.post<any>("http://localhost:5000/signUp",data);
  }

  signInUser(data:any){
    return this.http.post<any>("http://localhost:5000/logIn",data);
  }
}