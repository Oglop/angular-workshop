import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote-interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpsClient: HttpClient) { 

  }
  apiUrl = `${environment.host}/quotes`;
  quotes: Quote[] = [];

  getAllQuotes():Observable<Quote[]> {
    return this.httpsClient.get<Quote[]>(this.apiUrl);
  }

  getQuoteById(id:number) {
    return this.httpsClient.get<Quote>(`${this.apiUrl}/${id}`)
  }

  insertQuote(quote: Quote) {
    return this.httpsClient.post<ApiResponse>(this.apiUrl, quote)
  }

  updateQuote(quote: Quote, id: number) {
    return this.httpsClient.put<ApiResponse>(`${this.apiUrl}/${id}`, quote)
  }

  deleteQuote(id: number) {
    return this.httpsClient.delete<ApiResponse>(`${this.apiUrl}/${id}`)
  }

}
