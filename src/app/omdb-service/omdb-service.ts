import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=826f752f';

  constructor(private http: HttpClient) {}

  searchMoviesByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}`);
  }
}
