import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = environment.api;
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Record<string,any>> {
    return this.http.get(`${this.baseURL}/products.json`).pipe(delay(1000));
  }
}
