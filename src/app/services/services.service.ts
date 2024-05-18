import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient){}

  signUpUser(data:any){
    return this.http.post<any>("http://localhost:5000/api/signUp",data);
  }

  signInUser(data:any){
    return this.http.post<any>("http://localhost:5000/api/logIn",data);
  }

  getUserDetails(){
    return this.http.get<any>("http://localhost:5000/api/chatDetails");
  }

  getChatMessages(data: any){
    return this.http.post<any>("http://localhost:5000/api/chatMessages", data);
  }

  logout() {
    localStorage.removeItem('accessToken');
}
}