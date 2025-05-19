import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const { providers: appProviders = [], ...restConfig } = appConfig || {};

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), ...appProviders],
  ...restConfig,
}).catch((err) => console.error(err));
