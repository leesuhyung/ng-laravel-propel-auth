import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable()
export class UserService {
    private apiBaseUrl = `${environment.apiBaseUrl}/user`;

    constructor(private http: HttpClient) {
    }

    public create(user: User): Promise<User> {
        return this.http.post<any>(this.apiBaseUrl, user)
            .toPromise()
            .then(response => {
                return response.data as User
            })
            .catch(errors => {
                console.log(errors.error);
                return Promise.reject(errors);
            });
    }
}
