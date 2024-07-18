import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './feedback'; 

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseURL = "http://localhost:8080/api/v1/Feedback"; 

  constructor(private httpClient: HttpClient) { }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(`${this.baseURL}`, feedback);
  }

  getFeedbackList(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}/feedback`);
  }

  getFeedbackById(feedbackId: number): Observable<Feedback> {
    return this.httpClient.get<Feedback>(`${this.baseURL}/${feedbackId}`);
  }

  updateFeedback(feedbackId: number, feedback: Feedback): Observable<Feedback> {
    return this.httpClient.put<Feedback>(`${this.baseURL}/update/${feedbackId}`, feedback);
  }

  deleteFeedback(feedbackId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${feedbackId}`);
  }
}
