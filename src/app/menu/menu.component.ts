import { Component} from '@angular/core';
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

  searchMovies(){
    console.log("Movies search");
  }

  movieData: any;

  /*
  constructor(private omdbService: omdbService) {}

  getMovieDetails(movieId: string): void {
    this.omdbService.getMovieData(movieId).subscribe(data => {
      this.movieData = data;
    });
  }
    */
}
