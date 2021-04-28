import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parts-nav-bar',
  templateUrl: './parts-nav-bar.component.html',
  styleUrls: ['./parts-nav-bar.component.scss']
})
export class PartsNavBarComponent implements OnInit {

  @Input() factoryId: string;

  navLinks = [
    {path: '/parts/engines', label: 'Engine'},
    {path: '/parts/wheels', label: 'Wheels'},
    {path: '/parts/breaks', label: 'Breaks'},
    {path: '/parts/tires', label: 'Tires'},
    {path: '/parts/windows', label: 'Windows'},
    {path: '/parts/painting', label: 'Painting'},
    {path: '/parts/equipment', label: 'Equipment'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
