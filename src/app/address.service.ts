import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseURL = "http://localhost:8080/api/v1/Address"; 

  constructor(private httpClient: HttpClient) { }

  createAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(`${this.baseURL}`, address);
  }

  getAddressList(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${this.baseURL}/all`);
  }

  getAddressById(addressId: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.baseURL}/${addressId}`);
  }

  updateAddress(addressId: number, address: Address): Observable<Address> {
    return this.httpClient.put<Address>(`${this.baseURL}/${addressId}`, address);
  }

  deleteAddress(addressId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${addressId}`);
  }
}
