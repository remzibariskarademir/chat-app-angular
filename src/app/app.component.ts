import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './utils/services/auth-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-app-angular';
  showNavbar = true;

  constructor(public authService: AuthService) {
    // Sadece tarayıcıda çalışıyorsa localStorage'a eriş
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }
  }
}
