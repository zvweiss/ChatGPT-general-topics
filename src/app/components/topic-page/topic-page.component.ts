import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Topic, TOPICS } from '../../data/topics';

@Component({
  selector: 'app-topic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  topic: Topic | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.topic = TOPICS.find(t => t.slug === slug);
    });
  }
}