import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  profilePhoto: any = "assets/images/person.svg";
  profileVisible = false;

  profileContent(){
    this.profileVisible = !this.profileVisible;
  }

  myAccount(){
    console.log("My account");
  }

  logout(){
    const confirmation = confirm('Are you sure you want to log out?');
    if (confirmation) {
      alert('Successful log-out');
      this.router.navigate(['']);
    }
  }

  checkWidth = window.innerWidth;

  image: any = "assets/images/menu.svg";
  isMenuOpen = false;

  toggleMenu(): void {
    if(!this.isMenuOpen) this.image = "assets/images/close.svg";
    else this.image = "assets/images/menu.svg";
    this.isMenuOpen = !this.isMenuOpen;
  }
}
