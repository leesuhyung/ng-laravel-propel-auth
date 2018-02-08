import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {chart} from 'highcharts';
import * as Highcharts from 'highcharts';
import {Charts} from "../../models/charts";

@Component({
    selector: 'charts-view-highcharts',
    templateUrl: './charts-view-highcharts.component.html'
})
export class ChartsViewHighchartsComponent implements OnChanges {

    @Input() table: string;
    loading: boolean = false;
    errorResponse: string;
    limit: number = 7;
    highchart: Highcharts.ChartObject;
    charts: Charts = new Charts();

    @ViewChild('chartTarget') chartTarget: ElementRef;

    constructor(private service: ChartsService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.loadCharts();
    }

    public createChart() {
        const options: Highcharts.Options = {
            title: {
                 text: ''
            },
            xAxis: {
                categories: this.charts.labels
            },
            yAxis: {
                title: {
                    text: this.charts.label
                }
            },
            series: [{
                name: this.charts.label,
                data: this.charts.data
            }]
        };

        this.highchart = chart(this.chartTarget.nativeElement, options);
    }

    public loadCharts() {
        this.loading = true;
        this.service.data(this.table, this.limit)
            .subscribe(
                response => this.successful(response),
                error => this.failure(error),
                () => console.log('charts-view-highcharts::loadCharts(' + this.table + ') done.')
            )
    }

    public successful(response: any): void {
        this.loading = false;
        this.setData(response);
        this.createChart();
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
    }

    public clearData() {
        this.charts.labels = [];
        this.charts.data = [];
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
