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
    if (this.movieTitle == '') console.log("No imput");
    else console.log("Movies search: " +this.movieTitle);
  }

  /*
  constructor(private omdbService: omdbService) {}

  getMovieDetails(): void {
    this.omdbService.getMovieData(this.movieTitle).subscribe(data => {
      this.movieData = data;
    });
  }
    */
}
