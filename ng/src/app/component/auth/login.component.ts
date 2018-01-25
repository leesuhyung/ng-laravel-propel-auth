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
        'email': new FormControl('', Validators.required),
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
                .then(response => {
                    let returnUrl = this.service.getReturnUrl();

                    if (returnUrl) {
                        this.service.removeReturnUrl();
                        window.location.href = returnUrl;
                    }
                    else {
                        window.location.href = '/home';
                    }
                })
                .catch(errors => {
                    this.errorResponse = errors.error;
                });
        }
    }

}
