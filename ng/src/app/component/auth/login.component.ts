import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    errorResponse: string;
    env: any = environment;
    formGroup: FormGroup = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
        'password': new FormControl('', Validators.required),
    });

    constructor(private router: Router,
                private service: AuthService) {
    }

    ngOnInit() {
        if (this.service.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    }

    public submit() {
        if (this.formGroup.valid) {
            this.service.login(this.formGroup.controls.email.value, this.formGroup.controls.password.value)
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('login::submit done.')
                )
        }
    }

    public successful(response: any): void {
        localStorage.setItem('token', response.token);

        let returnUrl = this.service.getReturnUrl();

        if (returnUrl) {
            this.service.removeReturnUrl();
            window.location.href = returnUrl;
        }
        else {
            window.location.href = '/home';
        }
    }

    public failure(error: any): void {
        this.errorResponse = error;
    }

}
