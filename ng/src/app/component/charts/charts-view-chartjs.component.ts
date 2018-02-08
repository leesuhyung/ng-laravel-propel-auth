import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {Charts} from "../../models/charts";

@Component({
    selector: 'charts-view-chartjs',
    templateUrl: './charts-view-chartjs.component.html'
})
export class ChartsViewChartjsComponent implements OnChanges {

    @Input() table: string;
    loading: boolean = false;
    errorResponse: string;
    limit: number = 7;
    charts: Charts = new Charts();
    datasets: any[] = [];

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
                () => console.log('charts-view-chartjs::loadCharts('+this.table+') done.')
            )
    }

    public successful(response: any): void {
        this.loading = false;
        this.setData(response);
    }

    public setData(response: any) {
        this.clearData();

        for (let data of response.data) {
            this.charts.labels.push(data.dates);
            this.charts.data.push(data.count);
        }

        if (this.table == 'user') {
            this.charts.label = '가입자 수';
        } else if (this.table == 'board') {
            this.charts.label = '글 작성 수';
        } else {
            this.charts.label = '';
        }

        let datasets = Object.assign({}, {label: this.charts.label, data: this.charts.data});
        this.datasets.push(datasets);
    }

    public clearData() {
        this.datasets = [];
        this.charts.labels = [];
        this.charts.data = [];
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
