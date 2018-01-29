import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {JwtHelperService} from '@auth0/angular-jwt'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class AuthService {
    private apiBaseUrl = `${environment.apiBaseUrl}/auth`;

    @Output() tokenExpireTime = new EventEmitter<any>();

    constructor(private http: HttpClient,
                private router: Router,
                private jwtHelperService: JwtHelperService) {
        if (this.isLoggedIn()) {
            this.checkTokenExpired();

            setInterval(() => {
                this.checkTokenExpired();
            }, 1000);
        }
    }

    public checkTokenExpired() {
        let exp = this.jwtHelperService.decodeToken(this.getToken()).exp;
        let sec = (exp * 1000) - (new Date()).getTime();

        let sec_date_set = new Date(sec);
        let timer = sec_date_set.getMinutes()+'분'+sec_date_set.getSeconds()+'초';

        // console.log('토큰 만료 시간 :'+sec/60/1000+'분 남았습니다.');
        // console.log('토큰 만료시간 : '+timer);

        this.tokenExpireTime.emit(timer);

        if (sec < 1 * 60 * 1000) {
            this.logout();
        }
        else if (sec < 2 * 60 * 1000) {
            this.tokenExpireTime.emit(timer);
        }
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiBaseUrl}/login`, {email: email, password: password})
            .map(response => response)
            .catch(this.handleError)
    }

    public logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    public refresh(): Observable<any> {
        return this.http.get(this.apiBaseUrl + '/refresh')
            .map(response => response)
            .catch(this.handleError)
    }

    public isLoggedIn(): boolean {
        // console.log('생성된토큰: '+this.jwtHelperService.decodeToken(this.getToken()));
        // console.log('만료여부: '+this.jwtHelperService.isTokenExpired());
        // console.log('만료일시: '+this.jwtHelperService.getTokenExpirationDate());
        // console.log('현재시간: '+new Date());
        if (this.getToken() && this.getToken() !== 'undefined') {
            return !this.jwtHelperService.isTokenExpired();
        }

        return false;
    }

    public getToken(): string {
        return localStorage.getItem('token');
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

    public handleError(error: any) {
        console.error(error);
        return Observable.throw(error.error || 'Server error');
    }
}
