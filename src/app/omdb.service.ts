import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbService implements OnInit{

  private apiUrl = 'http://www.omdbapi.com/?apikey=826f752f';

  ngOnInit(): void {
      
  }
  
  constructor(private http: HttpClient) {}

  searchMoviesByTitle(title: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}&Type=movie&page=${page}`);
  }

  getTotalResults(title: string, page: number): Observable<number> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}&Type=movie&page=${page}`).pipe(
      map(response => response.totalResults)
    );
  }
  
}
