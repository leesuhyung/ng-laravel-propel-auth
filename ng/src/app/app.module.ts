import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {TopNavComponent} from './top-nav.component';
import {TopTimerComponent} from './top-timer.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home.component';
import {LoginComponent} from './component/auth/login.component';
import {Error404Component} from './component/error404/error404.component';
import {RegisterComponent} from './component/auth/register.component';
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddHeaderInterceptor} from "./add-header-interceptor";
import {UserService} from "./services/user.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {UserIndexComponent} from './component/user/user-index.component';
import {UserDetailComponent} from './component/user/user-detail.component';
import {BoardIndexComponent} from './component/board/board-index.component';
import {BoardDetailComponent} from './component/board/board-detail.component';
import {BoardCreateFormComponent} from './component/board/board-create-form.component';
import {BoardEditFormComponent} from './component/board/board-edit-form.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {JwtModule} from '@auth0/angular-jwt';
import {BoardService} from "./services/board.service";
import {UserEditFormComponent} from "./component/user/user-edit-form.component";
import {UserDeleteFormComponent} from "./component/user/user-delete-form.component";
import {FindBoardEntityPipe} from "./pipes/find-board-entity.pipe";
import {BoardDeleteFormComponent} from './component/board/board-delete-form.component';
import {MarkdownModule} from "angular2-markdown";
import {LoadingModule} from "ngx-loading";
import {ChartsComponent} from './component/charts/charts.component';
import {ChartsService} from "./services/charts.service";
import {ChartsModule} from "ng2-charts/ng2-charts";
import {ChartsViewChartjsComponent} from './component/charts/charts-view-chartjs.component';
import {ChartsViewHighchartsComponent} from "./component/charts/charts-view-highcharts.component";


@NgModule({
    declarations: [
        AppComponent,
        TopNavComponent,
        TopTimerComponent,
        HomeComponent,
        LoginComponent,
        Error404Component,
        RegisterComponent,
        UserIndexComponent,
        UserDetailComponent,
        UserEditFormComponent,
        UserDeleteFormComponent,
        BoardIndexComponent,
        BoardDetailComponent,
        BoardCreateFormComponent,
        BoardEditFormComponent,
        FindBoardEntityPipe,
        BoardDeleteFormComponent,
        ChartsComponent,
        ChartsViewChartjsComponent,
        ChartsViewHighchartsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['localhost:4200', 'scv.local']
            }
        }),
        MarkdownModule.forRoot(),
        LoadingModule,
        ChartsModule
    ],
    providers: [
        AuthService,
        UserService,
        BoardService,
        AuthGuardService,
        ChartsService
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: AddHeaderInterceptor,
            multi: true,
        },*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
