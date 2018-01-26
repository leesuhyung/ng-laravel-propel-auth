import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Paginate} from "../../models/paginate";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'user-index',
    templateUrl: './user-index.component.html'
})
export class UserIndexComponent {

    errorResponse: string;
    page: number = 1;
    limit: number = 7;
    paginate: Paginate = new Paginate;
    items: User[] = [];

    constructor(private service: UserService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['page'] || 1;
                this.limit = +params['limit'] || this.limit;
                this.loadList();
            });
    }

    public loadList() {
        this.service.index(this.page, this.limit)
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('user-index::loadList done.')
            )
    }

    public loadPage(page?: number) {
        let routeLink = '/' + this.route.snapshot.url[0].path;
        this.router.navigate([routeLink], {queryParams: {page: page, limit: this.limit}});
    }

    public successful(response: any): void {
        this.items = response.data;
        this.paginate = response.paginate;
    }

    public failure(error: any): void {
        this.errorResponse = error;
    }
}
