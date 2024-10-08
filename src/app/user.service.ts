import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/v1/users";  
  getUsersList: any;

  constructor(private httpClient: HttpClient) { }

  
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}`, user); 
  }

  
  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${userId}`); 
  }

  
  updateUser(userId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/update/${userId}`, user); 
  }

 
  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${userId}`); 
  }

 
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/all`); 
  }

  
  getUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/username/${username}`); 
  }
}
