  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { provideRouter } from '@angular/router';
  import { routes } from './app/app.routes';
  import { provideMarkdown } from 'ngx-markdown';
  
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideMarkdown()  // 👈 enables markdown rendering
  ]
});
