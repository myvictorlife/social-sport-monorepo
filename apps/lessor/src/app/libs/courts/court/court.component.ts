import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Court } from 'entity-lib';
import * as fromCourtsActions from '../../../core/store/courts/courts.actions';

@Component({
    selector: 'lessor-court',
    templateUrl: './court.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourtComponent {

    @Input() court: Court;

    constructor(private store: Store, private router: Router) {}

    goToCourtDetails() {
        this.store.dispatch(fromCourtsActions.setCourtSelected({ court: this.court }));
        this.router.navigateByUrl('/court-details');
    }

}
