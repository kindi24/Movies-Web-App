import { Component, OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OmdbService } from '../omdb.service';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  checkWidth = window.innerWidth;

  searchDesc: string = 'Find a movie by searching for the title';
  
  movies: any[] = [];
  movieTitle: string = '';
  currentPage: number = 1;

  constructor(private omdbService: OmdbService, private router: Router) {}

  ngOnInit(): void {

  }

  clickedSearch: boolean = false;

  firstSearchMovies(){
    this.currentPage = 1;
    if (this.movieTitle.trim()) {
      this.omdbService.searchMoviesByTitle(this.movieTitle, this.currentPage).subscribe(response => {
        if (response.Search) {
          this.movies = response.Search;
          this.clickedSearch = !this.clickedSearch;
        } else {
          this.movies = [];
          this.clickedSearch = !this.clickedSearch;
        }
      });
    }
  }

  searchMovies(): void {
    if (this.movieTitle.trim()) {
      this.omdbService.searchMoviesByTitle(this.movieTitle, this.currentPage).subscribe(response => {
        if (response.Search) {
          this.movies = response.Search;
          this.clickedSearch = !this.clickedSearch;
        } else {
          this.movies = [];
          this.clickedSearch = !this.clickedSearch;
        }
      });
    }
  }

  previousTenMovies(): void {
    if(this.currentPage > 1){
      this.currentPage--;
      this.searchMovies();
    }
  }

  nextTenMovies(): void {
      if (this.movies.length === 10){
        this.currentPage++;
        this.searchMovies();
      }
  }

  showMovieData(movie: Movie): void {
    this.router.navigate(['/movie'], {state: {data:movie}});
  }
}
