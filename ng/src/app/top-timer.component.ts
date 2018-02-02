import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'top-timer',
    templateUrl: './top-timer.component.html'
})
export class TopTimerComponent {

    loading: boolean = false;
    timer: any;

    constructor(private authService: AuthService) {
        this.authService.tokenExpireTime.subscribe(response => {
            this.timer = response;
        });
    }

    public refresh() {
        this.loading = true;
        this.authService.refresh().subscribe(
            response => {
                this.loading = false;
                localStorage.setItem('token', response.token);
            },
            error => {
                this.loading = false;
                null;
            },
            () => console.log('top-timer::refresh done.')
        )
    }

    public logout() {
        this.authService.logout();
        window.location.href = '/home';
    }
}
