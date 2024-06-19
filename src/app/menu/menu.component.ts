import { Component, OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  checkWidth = window.innerWidth;

  movieTitle: string = '';
  
  movies: any[] = [];
  searchTitle: string = '';

  searchMovies(){
    if (this.movieTitle == '') console.log("No imput");
    else console.log("Movies search: " +this.movieTitle);
  }

  // Crashes app with this command
  //constructor(private omdbService: OmdbService) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  /*
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
  }
    */
}
