import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'top-timer',
    templateUrl: './top-timer.component.html'
})
export class TopTimerComponent {

    timer: any;

    constructor(private authService: AuthService) {
        this.authService.tokenExpireTime.subscribe(response => {
            this.timer = response;
        });
    }

    public refresh() {
        this.authService.refresh().subscribe(
            response => {
                localStorage.setItem('token', response.token);
            },
            error => null,
            () => console.log('top-timer::refresh done.')
        )
    }

    public logout() {
        this.authService.logout();
        window.location.href = '/home';
    }
}
