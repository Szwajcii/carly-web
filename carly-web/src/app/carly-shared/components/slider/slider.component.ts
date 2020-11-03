import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../model/news.model';
import {newsObject} from '../news/news-object';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  newsList: News.Model[];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // FIXME: Fill newsList with objects from BE. Remove newsObject after.
    this.newsList = newsObject;
  }

  takeNewsAction(index: number) {
    console.log(500, 'Take action');
  }

}
