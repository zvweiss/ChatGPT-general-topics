import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicPageComponent } from './components/topic-page/topic-page.component';
import { GridworldOverviewComponent } from '../app/components/gridworld-overview/gridworld-overview.component';
import { GridworldComponent } from '../app/components/gridworld/gridworld.component';
import { MarkdownPageComponent } from './components/markdown-page/markdown-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics/:slug', component: TopicPageComponent },
  { path: 'gridworld/overview', component: GridworldOverviewComponent },
  { path: 'gridworld', component: GridworldComponent },
  { path: 'docs/:slug', component: MarkdownPageComponent }, // 👈 Markdown route
  { path: '**', redirectTo: '' }
];
