import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Court } from 'entity-lib';
import { Observable } from 'rxjs';
import * as fromCourtActions from '../core/store/courts/courts.actions';
import { selectCourts } from '../core/store/courts/courts.seletors';
@Component({
  selector: 'lessor-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  courtList$: Observable<Court[]> =  this.store.select(selectCourts);
  constructor(private store: Store) {
    this.fetchQuadras();
  }


  ngOnInit(): void {
  }

  fetchQuadras() {
    this.store.dispatch(fromCourtActions.fetchCourts());
  }
}
