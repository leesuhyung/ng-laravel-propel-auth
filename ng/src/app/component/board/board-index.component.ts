import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Paginate} from "../../models/paginate";
import {Board} from "../../models/board";
import {BoardService} from "../../services/board.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-board-index',
    templateUrl: './board-index.component.html'
})
export class BoardIndexComponent implements OnInit {

    loading: boolean = false;
    env: any = environment;
    errorResponse: string;
    page: number = 1;
    limit: number = 7;
    paginate: Paginate = new Paginate;
    items: Board[] = [];

    constructor(private service: BoardService,
                private route: ActivatedRoute,
                private router: Router,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['page'] || this.page;
                this.limit = +params['limit'] || this.limit;
                this.loadList();
            });
    }

    public loadList() {
        this.loading = true;
        this.service.index(this.page, this.limit)
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('board-index::loadList done.')
            )
    }

    public loadPage(page?: number) {
        let routeLink = '/' + this.route.snapshot.url[0].path;
        this.router.navigate([routeLink], {queryParams: {page: page, limit: this.limit}})
            .then((success) => {
                if (success !== true) {
                    this.loadList();
                }
            });
    }

    public open(content, size) {
        if (size == 'lg')
            this.modalService.open(content, {size: size});
        else
            this.modalService.open(content);
    }

    public successful(response: any): void {
        this.loading = false;
        this.items = response.data;
        this.paginate = response.paginate;
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
