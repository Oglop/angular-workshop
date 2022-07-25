import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = `${environment.host}/movies`;

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get(this.apiUrl);
  }
}
