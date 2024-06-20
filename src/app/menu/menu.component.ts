import { Component, OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OmdbService } from '../omdb.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  checkWidth = window.innerWidth;

  
  movies: any[] = [];
  movieTitle: string = '';

  constructor(private omdbService: OmdbService) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  
  searchMovies(): void {
    if (this.movieTitle.trim()) {
      this.omdbService.searchMoviesByTitle(this.movieTitle).subscribe(response => {
        if (response.Search) {
          this.movies = response.Search;
        } else {
          this.movies = [];
        }
      });
    }
  }
    
}
