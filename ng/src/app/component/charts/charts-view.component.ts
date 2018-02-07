import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChartsService} from "../../services/charts.service";
import {Charts, datasets} from "../../models/charts";

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
    data: number[];
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
        this.setChartsData(response);
    }

    public setChartsData(response: any) {
        this.clearChartsArray();

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

        // console.log(this.charts.datasets[0]);

        let datasets = Object.assign({}, {label: this.label, data: this.data});
        this.charts.datasets.push(datasets);

        // for (let i=0; i < this.charts.datasets.length; i++) {
        //     console.log(this.charts.datasets[i].data);
        // }

        // TODO: datasets 배열에 data, label 프로퍼티를 타입선언 말고도 빈값? 으로 초기화 하면
        // TODO: this.charts.datasets[?].data 식으로 불러올 수 있는듯.
        // TODO: 초기화가 가능하면 data=[] 에 넣지않아도, Object.assign 하지 않아도 다이렉트로 할당하면 될듯함.
        // TODO: for (let data of response.data) { this.charts.datasets[0].data.push(data.count) } 이런식으로..?
    }

    public clearChartsArray() {
        this.data = [];
        this.charts.datasets = [];
        this.charts.labels = [];
    }

    public failure(error: any): void {
        this.loading = false;
        this.errorResponse = error;
    }
}
