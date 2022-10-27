import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Court } from "entity-lib";

@Component({
    selector: 'lessor-court',
    templateUrl: './court.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourtComponent {

    @Input() court: Court;

}