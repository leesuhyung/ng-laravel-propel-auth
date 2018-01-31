import {Component} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: '[ng-modal]',
    template: `<ng-template></ng-template>`
})
export class NgModalComponent {

    constructor(public modalService: NgbModal,
                public activeModal: NgbActiveModal) {
    }

}
