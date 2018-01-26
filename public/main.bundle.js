webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-header-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHeaderInterceptor; });
var AddHeaderInterceptor = /** @class */ (function () {
    function AddHeaderInterceptor() {
    }
    AddHeaderInterceptor.prototype.intercept = function (req, next) {
        var newReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return next.handle(newReq);
    };
    return AddHeaderInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_auth_login_component__ = __webpack_require__("../../../../../src/app/component/auth/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_error404_error404_component__ = __webpack_require__("../../../../../src/app/component/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_auth_register_component__ = __webpack_require__("../../../../../src/app/component/auth/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_user_user_index_component__ = __webpack_require__("../../../../../src/app/component/user/user-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_user_user_detail_component__ = __webpack_require__("../../../../../src/app/component/user/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_board_board_index_component__ = __webpack_require__("../../../../../src/app/component/board/board-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_board_board_detail_component__ = __webpack_require__("../../../../../src/app/component/board/board-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__component_auth_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__component_auth_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__component_user_user_index_component__["a" /* UserIndexComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_8__component_user_user_detail_component__["a" /* UserDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_9__component_board_board_index_component__["a" /* BoardIndexComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'board/:id', component: __WEBPACK_IMPORTED_MODULE_10__component_board_board_detail_component__["a" /* BoardDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__component_error404_error404_component__["a" /* Error404Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<top-nav></top-nav>\n\n<main role=\"main\" class=\"container\">\n\n  <div class=\"starter-template\">\n    <router-outlet></router-outlet>\n  </div>\n\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: 페이지가 새로고침되지 않으면 리플래시가 실행되지 않는다. (라우트 이동시 새로고침 안됨) => auth service 생성자에 적용하길..
        if (this.authService.isLoggedIn() && !this.authService.checkJwtExp()) {
            this.authService.refresh()
                .subscribe(function (response) { return _this.successful(response); }, function (error) { return _this.failure(error); }, function () { return console.log('app-root(ngOnInit)::refresh done.'); });
        }
    };
    AppComponent.prototype.successful = function (response) {
        localStorage.setItem('token', response.token);
        console.log('JWT token 이 만료되어 재발급 되었습니다.');
    };
    AppComponent.prototype.failure = function (error) {
        //
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_nav_component__ = __webpack_require__("../../../../../src/app/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_auth_login_component__ = __webpack_require__("../../../../../src/app/component/auth/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_error404_error404_component__ = __webpack_require__("../../../../../src/app/component/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_auth_register_component__ = __webpack_require__("../../../../../src/app/component/auth/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_header_interceptor__ = __webpack_require__("../../../../../src/app/add-header-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_user_user_index_component__ = __webpack_require__("../../../../../src/app/component/user/user-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_user_user_detail_component__ = __webpack_require__("../../../../../src/app/component/user/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_board_board_index_component__ = __webpack_require__("../../../../../src/app/component/board/board-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_board_board_detail_component__ = __webpack_require__("../../../../../src/app/component/board/board-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_board_board_create_form_component__ = __webpack_require__("../../../../../src/app/component/board/board-create-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_board_board_edit_form_component__ = __webpack_require__("../../../../../src/app/component/board/board-edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_auth_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_error404_error404_component__["a" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_8__component_auth_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_user_user_index_component__["a" /* UserIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_user_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_board_board_index_component__["a" /* BoardIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_board_board_detail_component__["a" /* BoardDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_board_board_create_form_component__["a" /* BoardCreateFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_board_board_edit_form_component__["a" /* BoardEditFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__add_header_interceptor__["a" /* AddHeaderInterceptor */],
                    multi: true,
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/auth/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n    margin-bottom: 10px;\n}\n\n.form-signin .checkbox {\n    font-weight: normal;\n}\n\n.form-signin .form-control {\n    position: relative;\n    height: auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n    z-index: 2;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" #form=\"ngForm\" novalidate>\n  <h2 class=\"form-signin-heading\">{{ env.appName }} 로그인</h2>\n\n  <div class=\"alert alert-info\">\n    TEST 이메일: test@test.com<br />\n    비밀번호: 123123\n  </div>\n\n  <div *ngIf=\"errorResponse?.message\" class=\"alert alert-danger\">\n    {{errorResponse?.message}}\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputEmail\">이메일</label>\n    <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.email.invalid && form.submitted,\n              'is-valid': formGroup.controls.email.valid\n            }\"\n           placeholder=\"username@example.com\"\n           autofocus>\n    <div class=\"invalid-feedback\">\n      이메일이 입력되지 않았거나 형식이 올바르지 않습니다.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword\">비밀번호</label>\n    <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.password.invalid && form.submitted,\n              'is-valid': formGroup.controls.password.valid\n            }\"\n           placeholder=\"your password\">\n    <div class=\"invalid-feedback\">\n      비밀번호가 입력되지 않았습니다.\n   </div>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">로그인</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/component/auth/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("[^ @]*@[^ @]*")]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.service.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.service.login(this.formGroup.controls.email.value, this.formGroup.controls.password.value)
                .subscribe(function (response) { return _this.successful(response); }, function (error) { return _this.failure(error); }, function () { return console.log('login::submit done.'); });
        }
    };
    LoginComponent.prototype.successful = function (response) {
        localStorage.setItem('token', response.token);
        var returnUrl = this.service.getReturnUrl();
        if (returnUrl) {
            this.service.removeReturnUrl();
            window.location.href = returnUrl;
        }
        else {
            window.location.href = '/home';
        }
    };
    LoginComponent.prototype.failure = function (error) {
        this.errorResponse = error;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/component/auth/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/auth/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/auth/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n    margin-bottom: 10px;\n}\n\n.form-signin .checkbox {\n    font-weight: normal;\n}\n\n.form-signin .form-control {\n    position: relative;\n    height: auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n    z-index: 2;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" #form=\"ngForm\">\n  <h2 class=\"form-signin-heading\">{{ env.appName }} 회원가입</h2>\n  <div *ngIf=\"errorResponse?.message\" class=\"alert alert-danger\">\n    {{errorResponse?.message}}\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputEmail\">이메일</label>\n    <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.email.invalid && form.submitted,\n              'is-valid': formGroup.controls.email.valid\n            }\"\n           placeholder=\"username@example.com\"\n           autofocus>\n    <div class=\"invalid-feedback\">\n      이메일이 입력되지 않았거나 형식이 올바르지 않습니다.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputName\">이름</label>\n    <input type=\"text\" id=\"inputName\" formControlName=\"name\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.name.invalid && form.submitted,\n              'is-valid': formGroup.controls.name.valid\n            }\"\n           placeholder=\"username\">\n    <div class=\"invalid-feedback\">\n      이름이 입력되지 않았습니다.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword\">비밀번호</label>\n    <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.password.invalid && form.submitted,\n              'is-valid': formGroup.controls.password.valid\n            }\"\n           placeholder=\"your password\">\n    <div class=\"invalid-feedback\">\n      비밀번호가 입력되지 않았습니다.\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPasswordConfirmation\">비밀번호 확인</label>\n    <input type=\"password\" id=\"inputPasswordConfirmation\" formControlName=\"password_confirmation\" class=\"form-control\"\n           [ngClass]=\"{\n              'is-invalid': formGroup.controls.password_confirmation.invalid && form.submitted,\n              'is-invalid': formGroup.controls.password.value !== formGroup.controls.password_confirmation.value,\n              'is-valid': formGroup.controls.password_confirmation.valid\n                          && formGroup.controls.password.value == formGroup.controls.password_confirmation.value\n            }\"\n           placeholder=\"your password confirmation\">\n    <div class=\"invalid-feedback\">\n      비밀번호가 입력되지 않았거나 일치하지 않습니다.\n    </div>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">가입하기</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/component/auth/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service, authService) {
        this.router = router;
        this.service = service;
        this.authService = authService;
        this.env = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */];
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern("[^ @]*@[^ @]*")]),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'password_confirmation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.service.create(this.formGroup.getRawValue())
                .subscribe(function (response) { return _this.successful(response); }, function (error) { return _this.failure(error); }, function () { return console.log('register::submit done.'); });
        }
    };
    RegisterComponent.prototype.successful = function (response) {
        this.router.navigate(['/home']);
    };
    RegisterComponent.prototype.failure = function (error) {
        this.errorResponse = error;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/component/auth/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/auth/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/board/board-create-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  board-create-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/board/board-create-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardCreateFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardCreateFormComponent = /** @class */ (function () {
    function BoardCreateFormComponent() {
    }
    BoardCreateFormComponent.prototype.ngOnInit = function () {
    };
    BoardCreateFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board-create-form',
            template: __webpack_require__("../../../../../src/app/component/board/board-create-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BoardCreateFormComponent);
    return BoardCreateFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/board/board-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  board-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/board/board-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardDetailComponent = /** @class */ (function () {
    function BoardDetailComponent() {
    }
    BoardDetailComponent.prototype.ngOnInit = function () {
    };
    BoardDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board-detail',
            template: __webpack_require__("../../../../../src/app/component/board/board-detail.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BoardDetailComponent);
    return BoardDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/board/board-edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  board-edit-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/board/board-edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardEditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardEditFormComponent = /** @class */ (function () {
    function BoardEditFormComponent() {
    }
    BoardEditFormComponent.prototype.ngOnInit = function () {
    };
    BoardEditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board-edit-form',
            template: __webpack_require__("../../../../../src/app/component/board/board-edit-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BoardEditFormComponent);
    return BoardEditFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/board/board-index.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  board-index works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/board/board-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardIndexComponent = /** @class */ (function () {
    function BoardIndexComponent() {
    }
    BoardIndexComponent.prototype.ngOnInit = function () {
    };
    BoardIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board-index',
            template: __webpack_require__("../../../../../src/app/component/board/board-index.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BoardIndexComponent);
    return BoardIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found. (404 error)\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'error404',
            template: __webpack_require__("../../../../../src/app/component/error404/error404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-primary rounded box-shadow\">\n  <div class=\"lh-100\">\n    <h5 class=\"mb-0 text-white lh-100\">회원상세</h5>\n    <small class=\"text-light\">사이트의 회원 목록</small>\n  </div>\n</div>\n\n<div *ngIf=\"errorResponse?.message\" class=\"alert alert-danger\">\n  {{errorResponse?.message}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/user/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/component/user/user-detail.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/user/user-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-primary rounded box-shadow\">\n  <div class=\"lh-100\">\n    <h5 class=\"mb-0 text-white lh-100\">회원</h5>\n    <small class=\"text-light\">사이트의 회원 목록</small>\n  </div>\n</div>\n\n<div *ngIf=\"errorResponse?.message\" class=\"alert alert-danger\">\n  {{errorResponse?.message}}\n</div>\n\n<table class=\"table table-sm table-bordered\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">이름</th>\n    <th scope=\"col\">이메일</th>\n    <th scope=\"col\">가입일자</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let item of items\">\n      <td scope=\"row\"><a style=\"cursor: pointer\" routerLink=\"/user/{{item.Id}}\" queryParamsHandling=\"merge\">{{item.Id}}</a></td>\n    <td><a style=\"cursor: pointer\" routerLink=\"/user/{{item.Id}}\" queryParamsHandling=\"merge\">{{item.Name}}</a></td>\n    <td><a style=\"cursor: pointer\" routerLink=\"/user/{{item.Id}}\" queryParamsHandling=\"merge\">{{item.Email}}</a></td>\n    <td>{{item.CreatedAt}}</td>\n  </tr>\n  </tbody>\n</table>\n<div class=\"d-flex justify-content-center\">\n  <ngb-pagination\n          [(collectionSize)]=\"paginate.nbResults\"\n          [pageSize]=\"limit\"\n          [(page)]=\"paginate.page\"\n          [maxSize]=\"7\"\n          [rotate]=\"true\"\n          (pageChange)=\"loadPage($event?$event:1)\"\n          size=\"sm\"></ngb-pagination>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/user/user-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_paginate__ = __webpack_require__("../../../../../src/app/models/paginate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserIndexComponent = /** @class */ (function () {
    function UserIndexComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.limit = 7;
        this.paginate = new __WEBPACK_IMPORTED_MODULE_2__models_paginate__["a" /* Paginate */];
        this.items = [];
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.page = +params['page'] || 1;
            _this.limit = +params['limit'] || _this.limit;
            _this.loadList();
        });
    }
    UserIndexComponent.prototype.loadList = function () {
        var _this = this;
        this.service.index(this.page, this.limit)
            .subscribe(function (response) { return _this.successful(response); }, function (error) { return _this.failure(error); }, function () { return console.log('user-index::loadList done.'); });
    };
    UserIndexComponent.prototype.loadPage = function (page) {
        var routeLink = '/' + this.route.snapshot.url[0].path;
        this.router.navigate([routeLink], { queryParams: { page: page, limit: this.limit } });
    };
    UserIndexComponent.prototype.successful = function (response) {
        this.items = response.data;
        this.paginate = response.paginate;
    };
    UserIndexComponent.prototype.failure = function (error) {
        this.errorResponse = error;
    };
    UserIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-index',
            template: __webpack_require__("../../../../../src/app/component/user/user-index.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Scv project</h1>\n<p class=\"lead\">Laravel REST API, Angular/bootstrap 으로 구성된 사이트 입니다.</p>\n<p class=\"lead\">로그인, 회원가입, 회원, 게시판 기능 등이 있습니다.</p>\n<p>소스파일은 <a href=\"https://github.com/navystyle/scv\" target=\"_blank\">Git</a>을 참고해주세요.</p>"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/paginate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paginate; });
var Paginate = /** @class */ (function () {
    function Paginate() {
    }
    return Paginate;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.service.isLoggedIn()) {
            return true;
        }
        this.service.setReturnUrl(state.url);
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBaseUrl + "/auth";
        if (this.isLoggedIn()) {
            setInterval(function () {
                console.log('로그인되었습니다.');
            }, 3000);
        }
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.apiBaseUrl + "/login", { email: email, password: password })
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.refresh = function () {
        return this.http.get(this.apiBaseUrl + '/refresh')
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token && token !== 'undefined')
            return true;
        else
            return false;
    };
    AuthService.prototype.setReturnUrl = function (url) {
        localStorage.setItem('returnUrl', url);
    };
    AuthService.prototype.getReturnUrl = function () {
        return localStorage.getItem('returnUrl');
    };
    AuthService.prototype.removeReturnUrl = function () {
        localStorage.removeItem('returnUrl');
    };
    AuthService.prototype.parseJwt = function () {
        var token = localStorage.getItem('token');
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    AuthService.prototype.checkJwtExp = function () {
        // TODO: Jwt 파서, 게터를 angular2-jwt 라이브러리로 대체하기.
        var exp = this.parseJwt().exp;
        var exp_time = exp * 1000 - new Date().getTime();
        console.log('남은 만료시간 : ' + exp_time / 1000 / 60);
        if (exp_time < 0) {
            return false;
        }
        return true;
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.error || 'Server error');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiBaseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBaseUrl + "/user";
    }
    UserService.prototype.index = function (page, limit) {
        var params = [];
        params.push("page=" + page);
        if (limit) {
            params.push("limit=" + limit);
        }
        return this.http.get(this.apiBaseUrl + '?' + params.join('&'))
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiBaseUrl, user)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.profile = function () {
        return this.http.get(this.apiBaseUrl + '/profile')
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.error || 'Server error');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">{{ env.appName }}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/home\">홈</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/user\">회원</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/board\">게시판</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-md-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!user\">\n        <a class=\"nav-link\" routerLink=\"/login\">로그인</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!user\">\n        <a class=\"nav-link\" routerLink=\"/register\">회원가입</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"user\">\n        <button class=\"btn btn-warning nav-link dropdown-toggle text-dark\" id=\"dropdownButton\"\n           data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ user.Name }}</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownButton\">\n          <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer;\">로그아웃</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"errorResponse?.message\" class=\"mx-md-5 alert alert-danger small\">\n  {{errorResponse?.message}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.env = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.userService.profile()
                .subscribe(function (response) { return _this.successful(response); }, function (error) { return _this.failure(error); }, function () { return console.log('register::submit done.'); });
        }
    };
    TopNavComponent.prototype.logout = function () {
        this.authService.logout();
        window.location.href = '/home';
    };
    TopNavComponent.prototype.successful = function (response) {
        this.user = response.data;
    };
    TopNavComponent.prototype.failure = function (error) {
        this.errorResponse = error;
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'top-nav',
            template: __webpack_require__("../../../../../src/app/top-nav.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    appName: "Scv",
    production: false,
    apiBaseUrl: "http://scv.local/api"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map