import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class AuthService {
    private apiBaseUrl = `${environment.apiBaseUrl}/auth`;

    constructor(private http: HttpClient,
                private router: Router) {
        if (this.isLoggedIn()) {
            setInterval(() => {
                console.log('로그인되었습니다.')
            }, 3000);
        }
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiBaseUrl}/login`, {email: email, password: password})
            .map(response => response)
            .catch(this.handleError)
    }

    public logout() {
        localStorage.removeItem('token');
    }

    public refresh(): Observable<any> {
        return this.http.get(this.apiBaseUrl + '/refresh')
            .map(response => response)
            .catch(this.handleError)
    }

    public isLoggedIn(): boolean {
        let token = localStorage.getItem('token');
        if (token && token !== 'undefined') return true;
        else return false;
    }

    public setReturnUrl(url: string) {
        localStorage.setItem('returnUrl', url);
    }

    public getReturnUrl() {
        return localStorage.getItem('returnUrl');
    }

    public removeReturnUrl() {
        localStorage.removeItem('returnUrl');
    }

    public parseJwt() {
        let token = localStorage.getItem('token');
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    public checkJwtExp() {
        // TODO: Jwt 파서, 게터를 angular2-jwt 라이브러리로 대체하기.
        let exp = this.parseJwt().exp;
        let exp_time = exp * 1000 - new Date().getTime();

        console.log('남은 만료시간 : ' + exp_time / 1000 / 60);

        if (exp_time < 0) {
            return false;
        }

        return true;
    }

    public handleError(error: any) {
        console.error(error);
        return Observable.throw(error.error || 'Server error');
    }
}
