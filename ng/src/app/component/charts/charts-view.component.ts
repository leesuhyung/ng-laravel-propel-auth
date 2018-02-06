import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {Charts} from "../../models/charts";

@Component({
    selector: 'charts-view',
    templateUrl: './charts-view.component.html'
})
export class ChartsViewComponent implements OnChanges {

    @Input() table: string;
    loading: boolean = false;
    errorResponse: string;
    limit: number = 7;
    charts: Charts = new Charts();
    data: any = [];
    label: string;

    options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    constructor(private service: ChartsService) {
    }

    ngOnChanges(changes: SimpleChanges) {
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
        this.data = [];
        this.charts.datasets = [];
        this.charts.labels = [];

        for (let data of response.data) {
            this.data.push(data.count);
            this.charts.labels.push(data.dates);
        }

        if (this.table == 'user') {
            this.label = '가입자 수';
        } else if (this.table == 'board') {
            this.label = '글 작성 수';
        } else {
            this.label = '';
        }

        let datasets = Object.assign({}, {label: this.label, data: this.data});
        this.charts.datasets.push(datasets);
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
