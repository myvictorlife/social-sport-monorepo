import { Component, Input, OnInit } from '@angular/core';
import { Court } from 'entity-lib';

@Component({
  selector: 'lessor-court-list',
  templateUrl: './court-list.component.html',
  styleUrls: ['./court-list.component.scss'],
})
export class CourtsComponent implements OnInit {

  @Input() courtList: Court[] | null;

  constructor() { }

  ngOnInit() {
    console.log(this.courtList);
  }

}
