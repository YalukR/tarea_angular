import { Component } from '@angular/core';
import { FeaturedNewsItem } from '../../../core/models/featured-news.models';

@Component({
  selector: 'app-featured-news',
  imports: [],
  templateUrl: './featured-news.html',
  styleUrl: './featured-news.css',
})
export class FeaturedNews {
  private fullTitle = 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT';

  private randomTitle(): string {
    const words = this.fullTitle.split(' ');
    const min = 3;
    const max = words.length;
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    return words.slice(0, count).join(' ');
  }

  items: FeaturedNewsItem[] = Array.from({ length: 11 }, (_, i) => ({
    image: `images/news${(i % 11) + 1}.png`,
    alt: 'Lorem Ipsum Dolor',
    title: this.randomTitle(),
    category: 'LOREM',
    date: '4.16.25',
  }));
}