import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ChartsService} from "../../services/charts.service";

@Component({
    selector: 'charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

    loading: boolean = false;
    env: any = environment;
    errorResponse: string;
    count: any;

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

    public successful(response: any): void {
        this.loading = false;
        this.count = response.data;
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
