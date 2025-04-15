import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicPageComponent } from './components/topic-page/topic-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics/:slug', component: TopicPageComponent },
  { path: '**', redirectTo: '' }
];