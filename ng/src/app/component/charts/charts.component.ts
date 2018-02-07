import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ChartsService} from "../../services/charts.service";

@Component({
    selector: 'charts',
    templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {

    loading: boolean = false;
    env: any = environment;
    errorResponse: string;
    count: any;
    table: string = 'user';

    constructor(private service: ChartsService) {
    }

    ngOnInit() {
        this.loadCount();
    }

    public loadCount() {
        this.loading = true;
        this.service.index()
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('charts::loadCount done.')
            )
    }

    public toggleTable(table: string) {
        this.table = table;
    }

    public successful(response: any): void {
        this.loading = false;
        this.count = response.data;
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }

}
