import { Component } from '@angular/core';
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
export class MovieComponent {
  checkWidth = window.innerWidth;

  constructor(private router: Router) {}

  title = history.state.data.Title;
  year = history.state.data.Year;
  poster = history.state.data.Poster;
  type = history.state.data.Type;

  posterSource = document.getElementById("poster") as HTMLImageElement;

  returnMenu(): void {
    this.router.navigate(['/menu']);
  }
}
