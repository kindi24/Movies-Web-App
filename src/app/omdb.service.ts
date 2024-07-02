import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService implements OnInit{

  private apiUrl = 'http://www.omdbapi.com/?apikey=826f752f';

  ngOnInit(): void {
      
  }
  
  constructor(private http: HttpClient) {}

  searchMoviesByTitle(title: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}&plot=full&Type=movie&page=${page}`);
  }
  
}
