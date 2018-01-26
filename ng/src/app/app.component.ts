import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        // TODO: 페이지가 새로고침되지 않으면 리플래시가 실행되지 않는다. (라우트 이동시 새로고침 안됨) => auth service 생성자에 적용하길..
        if (this.authService.isLoggedIn() && !this.authService.checkJwtExp()) {
            this.authService.refresh()
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('app-root(ngOnInit)::refresh done.')
                )
        }
    }

    public successful(response: any): void {
        localStorage.setItem('token', response.token);
        console.log('JWT token 이 만료되어 재발급 되었습니다.')
    }

    public failure(error: any): void {
        //
    }
}