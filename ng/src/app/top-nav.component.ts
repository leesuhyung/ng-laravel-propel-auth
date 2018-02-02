import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";
import {User} from "./models/user";
import {UserService} from "./services/user.service";

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {

    loading: boolean = false;
    errorResponse: string;
    env: any = environment;
    user: User;

    constructor(public authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.loading = true;
            this.userService.profile()
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('top-nav::profile done.')
                )
        }
    }

    public logout() {
        this.authService.logout();
        window.location.href = '/home';
    }

    public successful(response: any): void {
        this.loading = false;
        this.user = response.data;
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }

}
