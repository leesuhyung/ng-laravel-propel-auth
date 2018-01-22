import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./component/auth/login.component";
import {UserComponent} from "./component/user/user.component";
import {BoardComponent} from "./component/board/board.component";
import {Error404Component} from "./component/error404/error404.component";
import {RegisterComponent} from "./component/auth/register.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: UserComponent },
    { path: 'board', component: BoardComponent },
    { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
