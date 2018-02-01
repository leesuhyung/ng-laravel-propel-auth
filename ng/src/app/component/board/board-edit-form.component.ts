import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Board, BOARD_ENTITY_LIST} from "../../models/board";
import {BoardService} from "../../services/board.service";

@Component({
    selector: 'board-edit-form',
    templateUrl: './board-edit-form.component.html'
})
export class BoardEditFormComponent implements OnInit {

    @Input('board') board: Board = new Board;
    @Output() success: EventEmitter<any> = new EventEmitter<any>();

    formGroup: FormGroup = new FormGroup({
        'Id': new FormControl('', Validators.required),
        'Entity': new FormControl('', Validators.required),
        'Title': new FormControl('', Validators.required),
        'Contents': new FormControl('', Validators.required),
    });

    entities: any[] = BOARD_ENTITY_LIST;
    errorResponse: string;
    editor;

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
            this.service.update(this.formGroup.getRawValue())
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('board-edit-form::submit done.')
                )
        }
    }

    public onEditorCreated(quill) {
        this.editor = quill;
    }

    public onContentChanged({quill, html, text}) {
        console.log(this.editor.getContents(quill));
    }

    public successful(response: any): void {
        this.reset();
        this.success.emit(response.data);
    }

    public failure(error: any): void {
        this.errorResponse = error;
        console.log(this.errorResponse);
    }
}
