import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./component/auth/login.component";
import {Error404Component} from "./component/error404/error404.component";
import {RegisterComponent} from "./component/auth/register.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {UserIndexComponent} from "./component/user/user-index.component";
import {UserDetailComponent} from "./component/user/user-detail.component";
import {BoardIndexComponent} from "./component/board/board-index.component";
import {BoardDetailComponent} from "./component/board/board-detail.component";
import {ChartsComponent} from "./component/charts/charts.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user', component: UserIndexComponent, canActivate: [AuthGuardService]},
    {path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuardService]},
    {path: 'board', component: BoardIndexComponent, canActivate: [AuthGuardService]},
    {path: 'board/:id', component: BoardDetailComponent, canActivate: [AuthGuardService]},
    {path: 'charts', component: ChartsComponent, canActivate: [AuthGuardService]},
    {path: '**', component: Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
