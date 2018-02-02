import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ChartsService {
    private apiBaseUrl = `${environment.apiBaseUrl}/charts`;

    constructor(private http: HttpClient) {
    }

    public index(): Observable<any> {
        return this.http.get(this.apiBaseUrl)
            .map(response => response)
            .catch(this.handleError)
    }

    // TODO: where create_at >= '....' User/Board counting
    /*
     * private datasets = [
     *  {
     *      label: "Users",
     *      data: [-7day data, -6day data... today data]
     *      mysql interval...
     * ];
     *
     * private labels = ['02-01', '02-02', '02-03', '02-04'... 'today'];
     *
     * 리턴값 : {
     *          '2018-02-01': 3,
     *          '2018-02-02': 4,
     *          ...
     *         }
     *
     *
     */

    public handleError(error: any) {
        console.error(error);
        return Observable.throw(error.error || 'Server error');
    }
}
