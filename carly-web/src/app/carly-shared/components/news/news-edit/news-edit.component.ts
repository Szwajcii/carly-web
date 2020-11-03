import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsManagementService} from '../../../resources/news-management.service';
import {map} from 'rxjs/operators';
import {News} from '../../../model/news.model';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  newsModel: News.Model;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsManagementService: NewsManagementService
  ) {
  }

  ngOnInit(): void {
  }

  findNewsId() {
    return this.activatedRoute.parent.params.pipe(map(params => params.id));
  }
}
