// SidebarComponent.ts
import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChildren('itemRef') items!: QueryList<ElementRef>;

  highlightStyle = {
    top: '0px',
    height: '0px'
  };

  topics = [
    { label: '🏠 Home', link: '/' },
    { label: '1. What is Intelligence?', link: '/topics/what-is-intelligence' },
    { label: '2. The Purpose of AI in Society', link: '/topics/purpose-of-ai' },
    { label: '3. How Reinforcement Learning Works', link: '/topics/reinforcement-learning' },
    { label: '4. Game Strategies vs. AI Learning', link: '/topics/game-strategy-vs-ai' },
    { label: '5. Heuristics vs. Emergent Behavior', link: '/topics/heuristics-vs-emergent' },
    { label: '6. Visualization Techniques in Education', link: '/topics/visualization-techniques' },
    { label: '7. State Space and Generalization', link: '/topics/state-space-and-generalization' },
    { label: '8. AI Creativity vs. Human Creativity', link: '/topics/ai-vs-human-creativity' },
  ];

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.updateHighlight());
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateHighlight());
  }

  setActiveIndex(index: number) {
    const item = this.items.toArray()[index].nativeElement;
    this.updateHighlightFromElement(item);
  }

  updateHighlight() {
    const activeItem = this.items.find(item =>
      item.nativeElement.classList.contains('active')
    )?.nativeElement;

    if (activeItem) {
      this.updateHighlightFromElement(activeItem);
    }
  }

  updateHighlightFromElement(el: HTMLElement) {
    const top = el.offsetTop;
    const height = el.offsetHeight;

    this.highlightStyle = {
      top: `${top}px`,
      height: `${height}px`
    };
  }
}