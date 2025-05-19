import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THEMES, PREVIEW_MESSAGES } from '../../constants/theme.constants';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  themes = THEMES;
  theme = THEMES[0];
  previewMessages = PREVIEW_MESSAGES;
  profileImageUrl =
    'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp';

  constructor() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.theme = savedTheme;
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  async onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async setTheme(t: string) {
    this.theme = t;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('selectedTheme', t); // Tema kaydediliyor
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
