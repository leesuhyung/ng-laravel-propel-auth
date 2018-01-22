import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    private apiBaseUrl = `${environment.apiBaseUrl}/auth`

    constructor(private http: HttpClient,
                private router: Router,) {
    }

    login(email: string, password: string): Promise<any> {
        return this.http.post<any>(`${this.apiBaseUrl}/login`, {email: email, password: password})
            .toPromise()
            .then(response => Promise.resolve(response))
            .then(response => {
                localStorage.setItem('token', response.data);
            })
            .catch(errors => Promise.reject(errors));
    }
}
