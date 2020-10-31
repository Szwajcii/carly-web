import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../model/news.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  newsList: News[];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  takeNewsAction(index: number) {
    console.log(500, 'Take action');
  }

}
