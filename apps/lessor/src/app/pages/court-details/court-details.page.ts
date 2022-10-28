import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromCourts from '../../core/store/courts/courts.seletors';

@Component({
  selector: 'lessor-court-details',
  templateUrl: './court-details.page.html',
  styleUrls: ['./court-details.page.scss'],
})
export class CourtDetailsPage implements OnInit {

  courtSelected$ = this.store.select(fromCourts.selectCourtSelected);
  dateSelected: any;
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {

  }

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }

  changeDate(event: any) {
    this.dateSelected = event.detail.value;
  }

}
