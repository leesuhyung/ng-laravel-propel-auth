import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    private apiBaseUrl = `${environment.apiBaseUrl}/auth`;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    public login(email: string, password: string): Promise<any> {
        return this.http.post<any>(`${this.apiBaseUrl}/login`, {email: email, password: password})
            .toPromise()
            .then(response => {
                localStorage.setItem('token', response.token);
            })
            .catch(errors => {
                console.log(errors);
                return Promise.reject(errors);
            });
    }

    public logout(): Promise<any> {
        return this.http.get<any>(this.apiBaseUrl + '/logout')
            .toPromise()
            .then(response => {
                localStorage.removeItem('token');
                this.router.navigate(['/home']);
            })
            .catch(errors => console.log(errors));
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

}
