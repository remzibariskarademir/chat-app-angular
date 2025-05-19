import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-app-angular';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Eğer route '/login' ise navbar'ı gizle
        this.showNavbar = event.url !== '/login';
      });

    // Sadece tarayıcıda çalışıyorsa localStorage'a eriş
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }
  }
}
