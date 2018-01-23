import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

    errorResponse: string;
    env: any = environment;
    formGroup: FormGroup = new FormGroup({
        'email': new FormControl('', Validators.email),
        'name': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
        'password_confirmation': new FormControl('', Validators.required),
    });

    constructor(private router: Router,
                private service: UserService) {
    }

    ngOnInit() {
    }

    public submit() {
        if (this.formGroup.valid) {
            this.service.create(this.formGroup.getRawValue())
                .then(response => {
                    this.router.navigate(['/home']);
                })
                .catch(errors => {
                    this.errorResponse = errors.error;
                });
        }
    }
}
