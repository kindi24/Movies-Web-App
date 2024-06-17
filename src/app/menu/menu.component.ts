import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OmdbServiceComponent } from '../omdb-service/omdb-service.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OmdbServiceComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  checkWidth = window.innerWidth;

  movieData: any;

  /*
  constructor(private omdbService: omdbService) {}

  ngOnInit(): void {
    this.getMovieDetails('tt3896198'); // Example movie ID
  }

  getMovieDetails(movieId: string): void {
    this.omdbService.getMovieData(movieId).subscribe(data => {
      this.movieData = data;
    });
  }
    */
}
