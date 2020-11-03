import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {NewsManagementService} from '../../../resources/news-management.service';
import {newsFormFields} from '../news-form-fields';
import {News} from '../../../model/news.model';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  @Input() news: News.Model;
  @Input() edit = false;

  generalForm: FormGroup;

  newsDetailForm: FormGroup;
  newsDetailsFormControls = this.formGroupService.addControlToModel(newsFormFields);

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
    private newsManagementService: NewsManagementService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {

    this.newsDetailForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.newsDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      newsDetailsForm: this.newsDetailForm
    });

    if (this.edit) {
      this.setFormValues(this.news);
    }

  }

  setFormValues(news: News.Model) {
    this.newsDetailsFormControls
      .forEach(control => this.newsDetailForm
        .get(control.inputName)
        .setValue(news[control.inputName])
      );
  }

  onSubmit() {
    const news: News.Model = {
      ...this.newsDetailForm.value
    };

    this.createOrUpdate(news);
  }

  createOrUpdate(news: News.Model) {
    let newsAction;

    if (this.edit) {
      newsAction = this.newsManagementService.update(news);
    } else {
      newsAction = this.newsManagementService.create(news);
    }

    newsAction.subscribe(data => {
      this.messageService.showMessage('News created!');
      this.router.navigate(['/news', data.id]);
    }, error => {
      this.messageService.showMessage('Create news failed!');
      console.log(error);
    });
  }

}
