import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../utils/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
