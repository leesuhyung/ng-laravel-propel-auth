import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: '[ng-modal]',
    template: `<ng-template></ng-template>`
})
export class NgModalComponent {

    constructor(private modalService: NgbModal) {
    }

    public open() {
        console.log('modal 실행');
    }
}
