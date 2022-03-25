import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUser():Observable<object> {
    return this.httpClient.get('http://localhost:8080/all');
  }

  setUser(form:any): Observable<object> {
    return this.httpClient.post('http://localhost:8080/add',form);
  }  
  
}


