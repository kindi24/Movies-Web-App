import { Component} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OmdbServiceComponent } from '../omdb-service/omdb-service.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OmdbServiceComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  checkWidth = window.innerWidth;

  movieTitle: string = '';
  movieData: any;

  searchMovies(){
    console.log("Movies search: " +this.movieTitle);
  }

  /*
  constructor(private omdbService: omdbService) {}

  getMovieDetails(movieId: string): void {
    this.omdbService.getMovieData(movieId).subscribe(data => {
      this.movieData = data;
    });
  }
    */
}
