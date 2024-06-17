import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-omdb-service',
  standalone: true,
  imports: [],
  templateUrl: './omdb-service.component.html',
  styleUrl: './omdb-service.component.scss'
})
export class OmdbServiceComponent {

  private apiUrl = 'http://www.omdbapi.com/?apikey=826f752f';

  constructor(private http: HttpClient) {}

  getMovieData(movieId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&i=${movieId}`);
  }
}
