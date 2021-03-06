import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = "http://localhost:4200/"
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void {
    this.snackbar.open(msg, "X", {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)
  }
  readyById(id: string): Observable<Product> {
    const URL = `${this.baseURL}/${id}`
    return this.http.get<Product>(URL)
  }
  update(product: Product): Observable<Product>{
    const URL = `${this.baseURL}/${product.id}`
     return this.http.put<Product>(URL, product)
  }
  delete(id: string): Observable<Product> {
    const URL = `${this.baseURL}/${id}`
    return this.http.delete<Product>(URL)
  }
}

