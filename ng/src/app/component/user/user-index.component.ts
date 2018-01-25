import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Paginate} from "../../models/paginate";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'user-index',
    templateUrl: './user-index.component.html'
})
export class UserIndexComponent implements OnInit {

    errorResponse: string;
    page: number = 1;
    limit: number = 7;
    paginate: Paginate = new Paginate;
    items: User[] = [];

    constructor(private service: UserService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.service.index(this.page, this.limit)
            .then(response => {
                this.items = response.data;
                this.paginate = response.paginate;
            })
            .catch(errors => {
                this.errorResponse = errors.error;
            })
    }

    public loadPage(page?: number) {
        let routeLink = '/' + this.route.snapshot.url[0].path;
        this.router.navigate([routeLink], {queryParams: {page: page, limit: this.limit}});
    }
}
