import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BOARD_ENTITY_LIST} from "../../models/board";
import {BoardService} from "../../services/board.service";

@Component({
    selector: 'board-create-form',
    templateUrl: './board-create-form.component.html'
})
export class BoardCreateFormComponent {

    loading: boolean = false;
    entities: any[] = BOARD_ENTITY_LIST;
    errorResponse: string;
    toggle: boolean = false;

    @Output() success: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup = new FormGroup({
        'Entity': new FormControl('', Validators.required),
        'Title': new FormControl('', Validators.required),
        'Contents': new FormControl('', Validators.required),
    });

    constructor(private service: BoardService) {
    }

    public submit() {
        if (this.formGroup.valid) {
            this.loading = true;
            this.service.create(this.formGroup.getRawValue())
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('board-create-form::submit done.')
                )
        }
    }

    public successful(response: any): void {
        this.loading = false;
        this.success.emit(response.data);
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
        console.log(this.errorResponse);
    }

    public togglePreview() {
        this.toggle = !this.toggle;
    }
}
