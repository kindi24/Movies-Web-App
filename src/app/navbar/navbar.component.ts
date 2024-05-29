import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout(){
    const confirmation = confirm('Are you sure you want to log out?');
    if (confirmation) {
      alert('Successful log-out');
      this.router.navigate(['']);
    }
  }
}
