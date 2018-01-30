import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

    routerLink: string = '';
    env: any = environment;
    errorResponse: string;
    item: User = new User;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: UserService) {
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
                () => console.log('user-detail::loadDetail done.')
            )
    }

    public successful(response: any): void {
        this.item = response.data;
    }

    public failure(error: any): void {
        this.errorResponse = error;
    }
}
