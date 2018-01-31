import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Board} from "../models/board";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BoardService {
    private apiBaseUrl = `${environment.apiBaseUrl}/board`;

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

    public create(board: Board): Observable<any> {
        return this.http.post(this.apiBaseUrl, board)
            .map(response => response)
            .catch(this.handleError)
    }

    public update(board: Board): Observable<any> {
        return this.http.put(`${this.apiBaseUrl}/${board.Id}`, board)
            .map(response => response)
            .catch(this.handleError)
    }

    public delete(board: Board): Observable<any> {
        return this.http.delete(`${this.apiBaseUrl}/${board.Id}`)
            .map(response => response)
            .catch(this.handleError)
    }

    public handleError(error: any) {
        console.error(error);
        return Observable.throw(error.error || 'Server error');
    }
}
