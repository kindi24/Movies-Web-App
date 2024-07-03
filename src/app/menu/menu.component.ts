import { Component, OnInit, HostListener} from '@angular/core';
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

  public checkWidth: any;
  searchDesc: string = 'Find a movie by searching for the title';  
  movies: any[] = [];
  movieTitle: string = '';
  currentPage: number = 1;
  totalResults: number = 0;
  totalPages: number = 0;

  constructor(private omdbService: OmdbService, private router: Router) {}

  // When user returns from movie to menu component
  searchTitle = window.history.state.searchTitle;
  page = window.history.state.page;
  total = window.history.state.total;

  ngOnInit(): void {
    this.checkWidth = window.innerWidth;
    if (this.searchTitle != undefined && this.searchTitle != ''){
      this.currentPage = this.page;
      this.movieTitle = this.searchTitle;
      this.totalPages = this.total;
      this.searchMovies();
    }
    this.searchTitle = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWidth = window.innerWidth;
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

      this.omdbService.getTotalResults(this.movieTitle, this.currentPage).subscribe(
        (results: number) => {
          this.totalResults = results;
          this.totalPages = Math.ceil(this.totalResults / 10);
          console.log(this.totalPages);
        },
        (error) => {
          console.error('Error fetching total results:', error);
        }
      );
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

  firstPage(): void {
    this.currentPage = 1;
    this.searchMovies();
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

  lastPage(): void {
    this.currentPage = this.totalPages;
    this.searchMovies();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.searchMovies();
  }

  showMovieData(movie: Movie): void {
    this.router.navigate(['/movie'], {state: {data:movie, title:this.movieTitle, page:this.currentPage, total: this.totalPages}});
  }
}
