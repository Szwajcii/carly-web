import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-form',
  templateUrl: './parts-form.component.html',
  styleUrls: ['./parts-form.component.scss']
})
export class PartsFormComponent implements OnInit {

  public static PARTS_PATH = '/parts/';
  public static PREVIEW = 'preview';

  constructor() { }

  ngOnInit(): void {
  }

}
