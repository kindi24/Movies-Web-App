import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout(){
    const confirmation = confirm('Are you sure you want to log out?');
    if (confirmation) {
      alert('Successful log-out');
      this.router.navigate(['']);
    }
  }
}
