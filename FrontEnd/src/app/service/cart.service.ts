import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  getCart():Observable<object> {
    return this.httpClient.get('http://localhost:8080/cart/all');
  }

  setCart(form:any): Observable<object> {
    return this.httpClient.post('http://localhost:8080/cart/add',form);
  }  

  updateCart(id:number,form:any): Observable<object> {

    return this.httpClient.put(`http://localhost:8080/cart/update/${id}`,form);
  }  

  getCartById(id:number): Observable<object> {
    return this.httpClient.get(`http://localhost:8080/cart/get/${id}`);
  }
  
  deleteCartById(id: number): Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/cart/delete/${id}`);
  }

  deleteCart(): Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/cart/deleteAll`);
  }
}


