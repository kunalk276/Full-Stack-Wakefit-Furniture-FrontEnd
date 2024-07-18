import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8080/api/v3/Product";

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, product)
      .pipe(
        tap(data => console.log('Create Product Response:', data)),
        catchError(this.handleError)
      );
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`)
      .pipe(
        tap(data => console.log('Product List Response:', data)),
        catchError(this.handleError)
      );
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${productId}`)
      .pipe(
        tap(data => console.log('Get Product By ID Response:', data)),
        catchError(this.handleError)
      );
  }

  updateProduct(productId: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${productId}`, product)
      .pipe(
        tap(data => console.log('Update Product Response:', data)),
        catchError(this.handleError)
      );
  }

  deleteProduct(productId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${productId}`)
      .pipe(
        tap(data => console.log('Delete Product Response:', data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
