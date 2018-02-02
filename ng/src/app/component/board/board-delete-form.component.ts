import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BoardService} from "../../services/board.service";
import {Board} from "../../models/board";

@Component({
    selector: 'board-delete-form',
    templateUrl: './board-delete-form.component.html'
})
export class BoardDeleteFormComponent implements OnInit {

    loading: boolean = false;
    errorResponse: string;

    @Input('board') board: Board = new Board;
    @Output() success: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup = new FormGroup({
        'Id': new FormControl('', Validators.required),
    });

    constructor(private service: BoardService) {
    }

    ngOnInit() {
        this.reset();
    }

    public reset() {
        this.formGroup.reset(this.board);
    }

    public submit() {
        if (this.formGroup.valid) {
            this.loading = true;
            this.service.delete(this.formGroup.getRawValue())
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('board-delete-form::submit done.')
                )
        }
    }

    public successful(response: any): void {
        this.loading = false;
        this.reset();
        this.success.emit(response.data);
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
        console.log(this.errorResponse);
    }
}
