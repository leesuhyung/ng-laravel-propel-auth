import {Component, Input, OnChanges} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {Charts} from "../../models/charts";

@Component({
    selector: 'charts-view',
    templateUrl: './charts-view.component.html'
})
export class ChartsViewComponent implements OnChanges {

    loading: boolean = false;
    errorResponse: string;
    limit: number = 7;
    @Input() table: string;

    /*datasets: any = [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3]
        }
    ];
    labels: any = [
        'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'
    ];*/
    options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    charts: Charts = new Charts();
    label: string;
    data: any = [];

    constructor(private service: ChartsService) {
    }

    ngOnChanges() {
        this.loadCharts();
    }

    public loadCharts() {
        this.loading = true;
        this.service.data(this.table, this.limit)
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('charts::loadCharts('+this.table+') done.')
            )
    }

    public successful(response: any): void {
        this.loading = false;

        this.label = this.table;
        this.data = [];

        for (let data of response.data) {
            // this.data.push(data.count);
            this.charts.labels.push(data.dates);
        }

        Object.assign(this.charts.datasets, this.label, this.data);

        console.log(this.charts);
        // TODO: datasets 안에 label 과 data 를 객체로 assign 해주기)
        // TODO: any = [ {aaa:'aa', bbb:'bb'} ] 이 형태가 배열안에 객체인지.. 확인

    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
