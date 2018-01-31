import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

    errorResponse: string;
    env: any = environment;
    formGroup: FormGroup = new FormGroup({
        'Email': new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
        'Name': new FormControl('', Validators.required),
        'Password': new FormControl('', Validators.required),
        'Password_confirmation': new FormControl('', Validators.required),
    });

    constructor(private router: Router,
                private service: UserService,
                private authService: AuthService) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    }

    public submit() {
        if (this.formGroup.valid) {
            this.service.create(this.formGroup.getRawValue())
                .subscribe(
                    response => this.successful(response),
                    error => this.failure(error),
                    () => console.log('register::submit done.')
                )
        }
    }

    public successful(response: any): void {
        this.router.navigate(['/home']);
    }

    public failure(error: any): void {
        this.errorResponse = error;
    }
}
