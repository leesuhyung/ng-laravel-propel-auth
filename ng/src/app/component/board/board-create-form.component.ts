import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BOARD_ENTITY_LIST} from "../../models/board";
import {BoardService} from "../../services/board.service";

@Component({
    selector: 'board-create-form',
    templateUrl: './board-create-form.component.html'
})
export class BoardCreateFormComponent {

    @Output() success: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup = new FormGroup({
        'Entity': new FormControl('', Validators.required),
        'Title': new FormControl('', Validators.required),
        'Contents': new FormControl('', Validators.required),
    });

    entities: any[] = BOARD_ENTITY_LIST;
    errorResponse: string;

    constructor(private service: BoardService) {
    }

    public submit() {
        if (this.formGroup.valid) {
            this.service.create(this.formGroup.getRawValue())
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('board-create-form::submit done.')
                )
        }
    }

    public successful(response: any): void {
        this.success.emit(response.data);
    }

    public failure(error: any): void {
        this.errorResponse = error;
        console.log(this.errorResponse);
    }
}
