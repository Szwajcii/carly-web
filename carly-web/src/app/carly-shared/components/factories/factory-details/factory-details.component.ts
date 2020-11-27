import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {FactoryMatch} from '../../../model/factory-match.model';
import {TEST_DATA} from '../test-factories-data';

@Component({
  selector: 'app-factory-details',
  templateUrl: './factory-details.component.html',
  styleUrls: ['./factory-details.component.scss']
})
export class FactoryDetailsComponent implements OnInit {

  factories: FactoryMatch[];
  factory: FactoryMatch;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.factories = TEST_DATA;
    let factoryId;
    this.findFactoryId().subscribe(data => {
      factoryId = data;
    });

    this.factory = this.factories.find(factory => factory.company.id === factoryId);

    console.log(this.factory);
  }

  findFactoryId() {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
