import { Component, OnInit, HostListener } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

  public checkWidth: any;
  
  ngOnInit(): void {
    this.checkWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWidth = window.innerWidth;
  }

}
