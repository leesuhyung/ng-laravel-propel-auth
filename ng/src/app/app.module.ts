import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {TopNavComponent} from './top-nav.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home.component';
import {UserComponent} from './component/user/user.component';
import {BoardComponent} from './component/board/board.component';
import {LoginComponent} from './component/auth/login.component';
import {Error404Component} from './component/error404/error404.component';
import {RegisterComponent} from './component/auth/register.component';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        TopNavComponent,
        HomeComponent,
        UserComponent,
        BoardComponent,
        LoginComponent,
        Error404Component,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
