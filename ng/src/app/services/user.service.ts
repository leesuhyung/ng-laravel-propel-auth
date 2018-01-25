import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable()
export class UserService {
    private apiBaseUrl = `${environment.apiBaseUrl}/user`;

    constructor(private http: HttpClient) {
    }

    public index(page: number, limit?: number): Promise<any> {
        let params: string[] = [];

        params.push(`page=${page}`);

        if (limit) {
            params.push(`limit=${limit}`);
        }

        return this.http.get<any>(this.apiBaseUrl + '?' + params.join('&'))
            .toPromise()
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(errors => {
                console.log(errors);
                return Promise.reject(errors);
            });
    }

    public create(user: User): Promise<User> {
        return this.http.post<any>(this.apiBaseUrl, user)
            .toPromise()
            .then(response => {
                return response.data as User;
            })
            .catch(errors => {
                console.log(errors);
                return Promise.reject(errors);
            });
    }

    public profile(): Promise<any> {
        return this.http.get<any>(this.apiBaseUrl + '/profile' )
            .toPromise()
            .then(response => {
                return response.data;
            })
            .catch(errors => console.log(errors));
    }

}
