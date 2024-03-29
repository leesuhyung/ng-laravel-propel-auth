import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    private apiBaseUrl = `${environment.apiBaseUrl}/user`;

    constructor(private http: HttpClient) {
    }

    public index(page: number, limit?: number): Observable<any> {
        let params: string[] = [];

        params.push(`page=${page}`);

        if (limit) {
            params.push(`limit=${limit}`);
        }

        return this.http.get(this.apiBaseUrl + '?' + params.join('&'))
            .map(response => response)
            .catch(this.handleError)
    }

    public detail(id: number): Observable<any> {
        return this.http.get(`${this.apiBaseUrl}/${id}`)
            .map(response => response)
            .catch(this.handleError)
    }

    public create(user: User): Observable<any> {
        return this.http.post(this.apiBaseUrl, user)
            .map(response => response)
            .catch(this.handleError)
    }

    public update(user: User): Observable<any> {
        return this.http.put(`${this.apiBaseUrl}/${user.Id}`, user)
            .map(response => response)
            .catch(this.handleError)
    }

    public delete(user: User): Observable<any> {
        return this.http.delete(`${this.apiBaseUrl}/${user.Id}`)
            .map(response => response)
            .catch(this.handleError)
    }

    public profile(): Observable<any> {
        return this.http.get(this.apiBaseUrl + '/profile' )
            .map(response => response)
            .catch(this.handleError)
    }

    public handleError(error: any) {
        console.error(error);
        return Observable.throw(error.error || 'Server error');
    }

}
