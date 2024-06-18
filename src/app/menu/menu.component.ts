import { Component, OnInit} from '@angular/core';
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
  
  movies: any[] = [];
  searchTitle: string = '';

  searchMovies(){
    if (this.movieTitle == '') console.log("No imput");
    else console.log("Movies search: " +this.movieTitle);
  }

  /*
  constructor(private omdbService: OmdbService) {}

  ngOnInit(): void {}

  searchMovies(): void {
    if (this.searchTitle.trim()) {
      this.omdbService.searchMoviesByTitle(this.searchTitle).subscribe(response => {
        if (response.Search) {
          this.movies = response.Search;
        } else {
          this.movies = [];
        }
      });
    }
    if (this.movies.length === 0 && this.searchTitle.trim()) alert("No movies found");
  }
    */
}
