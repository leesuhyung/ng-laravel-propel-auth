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

    env: any = environment;
    user: User;

    constructor(public authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.userService.profile()
                .then(response => {
                    this.user = response;
                })
        }
    }

}
