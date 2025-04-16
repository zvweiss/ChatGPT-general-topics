import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-page',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `<markdown [src]="'assets/markdown/' + slug + '.md'"></markdown>`
})
export class MarkdownPageComponent {
  slug = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }
}