import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/src/router_state";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private service: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.service.isLoggedIn()) {
            return true;
        }

        this.service.setReturnUrl(state.url);
        this.router.navigate(['/login']);
        return false;
    }
}
