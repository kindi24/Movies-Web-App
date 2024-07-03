import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, HttpClientModule, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) {}

  public checkWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWidth = window.innerWidth;
  }

  title = history.state.data.Title;
  year = history.state.data.Year;
  poster = history.state.data.Poster;
  type = history.state.data.Type;

  ngOnInit(): void {
    this.checkWidth = window.innerWidth;
    if(this.poster == 'N/A') this.poster = "../../assets/images/noImage.png";
  }

  movieTitle = window.history.state.title;
  currentPage = window.history.state.page;

  returnMenu(): void {
    this.router.navigate(['/menu'], {state: {searchTitle: this.movieTitle, page: this.currentPage}});
  }
}
