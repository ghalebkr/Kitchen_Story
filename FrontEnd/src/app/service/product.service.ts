import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<object> {
    return this.httpClient.get('http://localhost:8080/product/all');
  }

  setProduct(form:any): Observable<object> {
    return this.httpClient.post('http://localhost:8080/product/add',form);
  }  

  updateProduct(id:number,form:any): Observable<object> {

    return this.httpClient.put(`http://localhost:8080/product/update/${id}`,form);
  }  

  getProductById(id:number): Observable<object> {
    return this.httpClient.get(`http://localhost:8080/product/get/${id}`);
  }
  
  deleteProductById(id: number): Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/product/delete/${id}`);
  }
}


