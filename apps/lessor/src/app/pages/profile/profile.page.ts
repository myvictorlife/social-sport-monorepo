import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfile } from '../../core/store/profile/profile.selectors';
import * as fromProfileActions from '../../core/store/profile/profile.actions';

@Component({
  selector: 'lessor-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user$ = this.store.select(selectProfile);
  constructor(private store: Store) {
    this.fetchProfile();
  }

  ngOnInit() {
  }

  fetchProfile() {
    this.store.dispatch(fromProfileActions.fetchProfile());
  }

}
