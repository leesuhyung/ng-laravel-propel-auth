import {AfterViewInit, Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ChartsService} from "../../services/charts.service";

@Component({
    selector: 'charts',
    templateUrl: './charts.component.html'
})
export class ChartsComponent implements AfterViewInit {

    loading: boolean = false;
    env: any = environment;
    errorResponse: string;
    count: any;
    table: string = 'user';

    constructor(private service: ChartsService) {
    }

    ngAfterViewInit(): void {
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

    // TODO: CHART_DIRECTIVES 생성 (selector : [charts] ). 독립된 컴포넌트에 user/board 데이터를 넣는다. (default : user)
    // TODO: 컨트롤러에서 user, border 를 필터로 받아서 쿼리를 분기한다.
    // TODO: chartService.ts 인자 수정.
}
