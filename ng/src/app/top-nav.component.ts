import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {

    env: any = environment;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
    }

}
