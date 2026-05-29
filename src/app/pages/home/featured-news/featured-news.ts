import { Component } from '@angular/core';
import { FeaturedNewsItem } from '../../../core/models/featured-news.models';

@Component({
  selector: 'app-featured-news',
  imports: [],
  templateUrl: './featured-news.html',
  styleUrl: './featured-news.css',
})
export class FeaturedNews {
  items: FeaturedNewsItem[] = Array.from({ length: 11 }, (_, i) => ({
    image: `images/news${(i % 11) + 1}.png`,
    alt: 'Lorem Ipsum Dolor',
    title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT',
    category: 'LOREM',
    date: '4.16.25',
  }));
}