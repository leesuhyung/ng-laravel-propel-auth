import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Board} from "../../models/board";
import {BoardService} from "../../services/board.service";
declare var require: any;

@Component({
    selector: 'app-board-detail',
    templateUrl: './board-detail.component.html',
    styles: ['@media (max-width: 767.98px) {.col-md-3 {padding-right: 0px;}}']
})
export class BoardDetailComponent implements OnInit {

    routerLink: string = '';
    env: any = environment;
    errorResponse: string;
    item: Board = new Board;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BoardService,
                private modalService: NgbModal) {
        if (this.route.snapshot.url.length > 0) {
            this.routerLink = '/' + this.route.snapshot.url[0].path;
        }
    }

    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                if (params.id) {
                    this.loadDetail(params.id);
                }
            })
    }

    public loadDetail(id: number) {
        this.service.detail(id)
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('board-detail::loadDetail done.')
            )
    }

    public goToList() {
        this.router.navigate([this.routerLink], {queryParamsHandling: 'merge'});
    }

    public successful(response: any): void {
        this.item = response.data;
    }

    public failure(error: any): void {
        this.errorResponse = error;
    }

    public open(content, size) {
        if (size == 'lg')
            this.modalService.open(content, {size: size});
        else
            this.modalService.open(content);
    }

    public resetItem(item: Board) {
        this.item = item;
    }
}
