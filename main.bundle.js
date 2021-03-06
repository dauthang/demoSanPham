webpackJsonp([1,4],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundService = (function () {
    function NotFoundService() {
        this.notFound$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](false);
    }
    NotFoundService.prototype.emit = function (value) {
        this.notFound$.next(value);
    };
    Object.defineProperty(NotFoundService.prototype, "value", {
        get: function () {
            return this.notFound$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    NotFoundService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NotFoundService);
    return NotFoundService;
}());
//# sourceMappingURL=not-found.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashBoardComponent = (function () {
    function DashBoardComponent(router) {
        this.router = router;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
    };
    DashBoardComponent.prototype.detail = function (item) {
        return this.router.navigate(['/detail']);
    };
    DashBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dash-board',
            template: __webpack_require__(652),
            styles: [__webpack_require__(647)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashBoardComponent);
    return DashBoardComponent;
    var _a;
}());
//# sourceMappingURL=dash-board.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dash-board',
            template: __webpack_require__(653),
            styles: [__webpack_require__(648)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 469;


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(592);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_board_dash_board_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__dash_board_dash_board_component__["a" /* DashBoardComponent */],
        children: []
    },
    {
        path: 'detail',
        component: __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__["a" /* DetailComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(nfService) {
        this.nfService = nfService;
        this.title = 'app works!';
        this.isNotFound = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.nfService.notFound$.subscribe(function (isNotFound) { return _this.isNotFound = isNotFound; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(651),
            styles: [__webpack_require__(646)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__["a" /* NotFoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__["a" /* NotFoundService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dash_board_dash_board_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_not_found_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_detail_component__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dash_board_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detail_detail_component__["a" /* DetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_not_found_service__["a" /* NotFoundService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(nfService) {
        this.nfService = nfService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.nfService.emit(true);
    };
    NotFoundComponent.prototype.ngOnDestroy = function () {
        this.nfService.emit(false);
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(654),
            styles: [__webpack_require__(649)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__["a" /* NotFoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_not_found_service__["a" /* NotFoundService */]) === 'function' && _a) || Object])
    ], NotFoundComponent);
    return NotFoundComponent;
    var _a;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)();
// imports


// module
exports.push([module.i, ".card {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    padding: 4rem;\r\n    background-color: rgb(46, 45, 45);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\r\n}\r\n\r\n@media(max-width:768px) {\r\n    .card {\r\n        width: 100%;\r\n        padding: 1.5rem\r\n    }\r\n}\r\n\r\nh3 {\r\n  \r\n    color: white;\r\n    display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"../../assets/img/apple-icon.png\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"../../assets/img/favicon.png\">\r\n\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r\n  <title>Gaia - Bootstrap Template | Free Demo</title>\r\n  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\r\n  <link href=\"../../assets/css/bootstrap.css\" rel=\"stylesheet\" />\r\n  <link href=\"../../assets/css/gaia.css\" rel=\"stylesheet\" />\r\n\r\n  <!--     Fonts and icons     -->\r\n  <link href='https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600' rel='stylesheet' type='text/css'>\r\n  <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n  <link href=\"../../assets/css/fonts/pe-icon-7-stroke.css\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<body>\r\n\r\n  <nav class=\"navbar navbar-default fixed-top\" style=\"background-color: white;\">\r\n    <!-- if you want to keep the navbar hidden you can add this class to the navbar \"navbar-burger\"-->\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button id=\"menu-toggle\" type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#example\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar bar1\"></span>\r\n          <span class=\"icon-bar bar2\"></span>\r\n          <span class=\"icon-bar bar3\"></span>\r\n        </button>\r\n        <img alt=\"...\" src=\"../../assets/img/imgHd/loi-ngo.jpg\" />\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right navbar-uppercase\">\r\n          <li>\r\n            <a href=\"\">Trang ch???</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#about\">Gi???i thi???u</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#products\">S???n ph???m</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#contacts\">Li??n h???</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /.navbar-collapse -->\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <div class=\"section section-header\">\r\n    <div class=\"parallax\">\r\n      <div class=\"image\" style=\"background-image: url('../../assets/img/sanpham/hinhnen.png')\">\r\n      </div>\r\n      <div class=\"container\">\r\n        <!-- <div class=\"content\">\r\n                    <div class=\"title-area\">\r\n                        <p>Free Demo</p>\r\n                        <h1 class=\"title-modern\">Gaia</h1>\r\n                        <h3>Probably the most stylish bootstrap template in the world!</h2>\r\n                        <div class=\"separator line-separator\">???</div>\r\n                    </div>\r\n\r\n                    <div class=\"button-get-started\">\r\n                        <a href=\"http://www.creative-tim.com/product/gaia-bootstrap-template\" target=\"_blank\" class=\"btn btn-white btn-fill btn-lg \">\r\n                            Download Demo\r\n                        </a>\r\n                    </div>\r\n                </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section section-our-team-freebie\" id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"title-area\">\r\n            <h2>L???i gi???i thi???u v??? c??ng ty</h2>\r\n            <div class=\"separator separator-danger\">???</div>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">L???i ?????u ti??n c??ng ty TNHH ?????U T?? V?? PH??T TRI???N MINH PH?? xin g???i t???i qu?? kh??ch l???i ch??o tr??n tr???ng! \r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">Tr???i qua 12 n??m nghi??n c???u, x??y d???ng v?? ph??t tri???n, cho ?????n nay ch??ng t??i ???? v?? ??ang g???i ?????n b?? con\r\n              n??ng d??n nh???ng s???n ph???m \"Ch??? ph???m sinh h???c, kho??ng ch???t, dinh d?????ng s???n ph???m c???i t???o m??i tr?????ng s???\r\n              d???ng trong ng??nh nu??i tr???ng th???y s???n\" v?????t tr???i v??? ch???t l?????ng.\r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">C??c s???n ph???m ???? kh???ng ?????nh ???????c th??? m???nh v?? ch???t l?????ng tr??n th??? tr?????ng. ?????n v???i ch??ng t??i, qu?? kh??ch\r\n              h??ng s??? lu??n h??i l??ng b???i c??c l???i th??? sau t??? c??ng ty ch??ng t??i.\r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">- C?? ngu???n nguy??n li???u ???????c nh???p kh???u tr???c ti???p t??? n?????c ngo??i.</p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">- C??c s???n ph???m uy t??n v?? ch???t l?????ng cao.</p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">- S???n xu???t v?? b???o qu???n trong ??i???u ki???n ?????t ti??u chu???n.</p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">- C?? ?????i ng?? nh??n vi??n l?? nh???ng k??? s?? gi??u kinh nghi???m, ???????c ????o t???o b??i b???n trong ng??nh nu??i th???y s???n, nhi???t t??nh \r\n              v?? gi??u kinh nghi???m.\r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">- C?? ch??nh s??ch ????i ng??? t???t nh???t ?????i v???i kh??ch h??ng.\r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">V???i ph????ng ch??m \"S??? h??i l??ng c???a qu?? kh??ch l?? s??? t???n t???i c???a ch??ng t??i\", c??ng ty Minh Ph?? mong mu???n s??? lu??n\r\n              ???????c ?????ng h??nh g???n b?? tr???c ti???p v???i qu?? b?? con, l?? th????ng hi???u tin c???y trong ng??nh nu??i tr???ng th???y s???n Vi???t Nam.\r\n               ????? l??m ???????c ??i???u ????, Minh Ph?? s??? lu??n kh??ng ng???ng nghi??n c???u chuy??n s??u v?? th???c nghi???m tr??n c?? s??? khoa h???c, th???t\r\n               nhi???u v?? nhi???u h??n n???a, nh???m n??ng cao ch???t l?????ng s???n ph???m, gi?? c??? h???p l?? g??p ph???n n??ng cao hi???u qu??? v?? l???i nhu???n \r\n               cho b?? con.\r\n            </p>\r\n            <p class=\"text-justify\" style=\"text-indent: 30px;\">\r\n               Ch??ng t??i xin ch??n th??nh c???m ??n qu?? kh??ch h??ng ????, ??ang v?? s??? s??? d???ng s???n ph???m c???a Minh Ph?? trong th???i gian t???i. \r\n              K??nh ch??c qu?? kh??ch h??ng s???c kh???e v?? th???nh v?????ng.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section section-our-team-freebie\" id=\"products\">\r\n    <div class=\"parallax filter filter-color-black\">\r\n      <div class=\"image\" style=\"background-image:url('../../assets/img/tom-cang-xanh.JFIF')\">\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"title-area\">\r\n              <h2>Ch??ng t??i c??</h2>\r\n              <div class=\"separator separator-danger\">???</div>\r\n              <!-- <p class=\"description\">We promise you a new look and more importantly, a new attitude. We build that by\r\n                getting to know you, your needs and creating the best looking clothes.</p> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"team\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-10 col-md-offset-1\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/nutriMil.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">NUTRI MIL</h3>\r\n                          <a (click)=\"detail()\"  class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/btaGlucanC.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">BTA GLUCAN C</h3>\r\n                          <a href=\"#\" class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/iddine.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">IODINE</h3>\r\n                          <a href=\"#\" class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/bkc.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">BKC</h3>\r\n                          <a href=\"#\" class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/yuccaus.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">YUCCA US</h3>\r\n                          <a href=\"#\" class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"card card-member\">\r\n                      <div class=\"content\">\r\n                        <div class=\"\">\r\n                          <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/sanpham/eovs.png\" />\r\n                        </div>\r\n                        <div class=\"description\">\r\n                          <h3 class=\"title\">EOVS</h3>\r\n                          <a href=\"#\" class=\"btn btn-primary\">Xem chi ti???t</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section section-our-clients-freebie\">\r\n    <div class=\"container\">\r\n      <div class=\"title-area\">\r\n        <h5 class=\"subtitle text-gray\">Here are some</h5>\r\n        <h2>Clients Testimonials</h2>\r\n        <div class=\"separator separator-danger\">???</div>\r\n      </div>\r\n\r\n      <ul class=\"nav nav-text\" role=\"tablist\">\r\n        <li class=\"active\">\r\n          <a href=\"#testimonial1\" role=\"tab\" data-toggle=\"tab\">\r\n            <div class=\"image-clients\">\r\n              <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/faces/face_5.jpg\" />\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#testimonial2\" role=\"tab\" data-toggle=\"tab\">\r\n            <div class=\"image-clients\">\r\n              <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/faces/face_6.jpg\" />\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#testimonial3\" role=\"tab\" data-toggle=\"tab\">\r\n            <div class=\"image-clients\">\r\n              <img alt=\"...\" class=\"img-circle\" src=\"../../assets/img/faces/face_2.jpg\" />\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"testimonial1\">\r\n          <p class=\"description\">\r\n            And I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer\r\n            have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions\r\n            and colors. Now there is only one important color... Green I even had the pink polo I thought I was Kanye I\r\n            promise I will never let the people down. I want a better life for all!\r\n          </p>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"testimonial2\">\r\n          <p class=\"description\">Green I even had the pink polo I thought I was Kanye I promise I will never let the\r\n            people down. I want a better life for all! And I used a period because contrary to popular belief I strongly\r\n            dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times\r\n            the artist would contemplate proportions and colors. Now there is only one important color...\r\n          </p>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"testimonial3\">\r\n          <p class=\"description\"> I used a period because contrary to popular belief I strongly dislike exclamation\r\n            points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would\r\n            contemplate proportions and colors. The 'Gaia' team did a great work while we were collaborating. They\r\n            provided a vision that was in deep connection with our needs and helped us achieve our goals.\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"section section-small section-get-started\" id=\"contacts\">\r\n    <div class=\"parallax filter\">\r\n      <div class=\"image\" style=\"background-image: url('../../assets/img/office-1.jpeg')\">\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"title-area\">\r\n          <h2 class=\"text-white\">B???n c?? mu???n s??? dung c??c s???n ph???m ch??ng t??i kh??ng??</h2>\r\n          <div class=\"separator line-separator\">???</div>\r\n          <p class=\"description\"> Ch??ng t??i r???t quan t??m ?????n vi???c t???o ra c??c s???n ph???m Ch??? ph???m sinh h???c,\r\n             kho??ng ch???t, dinh d?????ng s???n ph???m c???i t???o m??i tr?????ng s??? d???ng trong ng??nh nu??i tr???ng th???y s???n v?????t tr???i v??? ch???t l?????ng\r\n             ????? kh??ch h??ng l??u t??m th?? ch??ng t??i kh??ng bao gi??? th???t v???ng !!!\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"button-get-started\">\r\n          <a href=\"#gaia\" class=\"btn btn-danger btn-fill btn-lg\">Li??n h??? ch??ng t??i</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <footer class=\"footer footer-big footer-color-black\" data-color=\"black\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\">C??ng ty TNHH ?????u t?? v?? ph??t tri???n Minh Ph??</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-home\"></i>\r\n                  <span>?????a ch???: L???u 10, 161-163 Tr???n Qu???c Th???o, Ph?????ng 09, Qu???n 03, Th??nh ph??? H??? Ch?? Minh</span>\r\n                </li>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-phone-square\"></i>\r\n                  <span>Hotline: 0949.509.8888</span>\r\n                </li>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-phone-square\"></i>\r\n                  <span>thangdau811@gmail.com</span>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\"> Help and Support</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Contact Us</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">How it works</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Terms &amp; Conditions</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Company Policy</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Money Back</a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"col-md-2 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\">Theo d??i ch??ng t??i tr??n</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-facebook btn-simple\">\r\n                    <i class=\"fa fa-facebook-square\"></i> Facebook\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-dribbble btn-simple\">\r\n                    <i class=\"fa fa-dribbble\"></i> Dribbble\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-twitter btn-simple\">\r\n                    <i class=\"fa fa-twitter\"></i> Twitter\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-reddit btn-simple\">\r\n                    <i class=\"fa fa-google-plus-square\"></i> Google+\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"copyright\">\r\n        ??\r\n        <script> document.write(new Date().getFullYear())</script> Creative Tim, made with love\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n\r\n<!--   core js files    -->\r\n<script src=\"../../assets/js/jquery.min.js\" type=\"text/javascript\"></script>\r\n<script src=\"../../assets/js/bootstrap.js\" type=\"text/javascript\"></script>\r\n\r\n<!--  js library for devices recognition -->\r\n<script type=\"text/javascript\" src=\"assets/js/modernizr.js\"></script>\r\n\r\n<!--  script for google maps   -->\r\n<script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js\"></script>\r\n\r\n<!--   file where we handle all the script from the Gaia - Bootstrap Template   -->\r\n<script type=\"text/javascript\" src=\"../../assets/js/gaia.js\"></script>\r\n\r\n</html>"

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"../../assets/img/apple-icon.png\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"../../assets/img/favicon.png\">\r\n\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r\n  <title>Gaia - Bootstrap Template | Free Demo</title>\r\n  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\r\n  <link href=\"../../assets/css/bootstrap.css\" rel=\"stylesheet\" />\r\n  <link href=\"../../assets/css/gaia.css\" rel=\"stylesheet\" />\r\n\r\n  <!--     Fonts and icons     -->\r\n  <link href='https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600' rel='stylesheet' type='text/css'>\r\n  <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n  <link href=\"../../assets/css/fonts/pe-icon-7-stroke.css\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<body>\r\n\r\n  <nav class=\"navbar navbar-default fixed-top\" style=\"background-color: white;\">\r\n    <!-- if you want to keep the navbar hidden you can add this class to the navbar \"navbar-burger\"-->\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button id=\"menu-toggle\" type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#example\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar bar1\"></span>\r\n          <span class=\"icon-bar bar2\"></span>\r\n          <span class=\"icon-bar bar3\"></span>\r\n        </button>\r\n        <img alt=\"...\" src=\"../../assets/img/imgHd/loi-ngo.jpg\" />\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right navbar-uppercase\">\r\n          <li>\r\n            <a href=\"\">Trang ch???</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#about\">Gi???i thi???u</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#products\">S???n ph???m</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#contacts\">Li??n h???</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /.navbar-collapse -->\r\n    </div>\r\n  </nav>\r\n\r\n  <!-- detail-start-->\r\n\r\n  <div class=\"container\">\r\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n                <div class=\"card\">\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 text-center align-self-center\"> <img class=\"img-fluid\" src=\"../../assets/img/sanpham/nutriMil.png\"> </div>\r\n                        <div class=\"col-md-6 info\">\r\n                          <h3>Th??nh ph???n</h3>\r\n                          <p>-Vitamin D3 (min) ....................................1.782.108 UI</p>   \r\n                          <p>-Vitamin D3 (min) ....................................1.782.108 UI</p>   \r\n                          <p>-Vitamin D3 (min) ....................................1.782.108 UI</p>   \r\n                          <h3>C??ng d???ng</h3>   \r\n                          <p>- T??ng c?????ng qu?? tr??nh trao ?????i ch???t h??? tr??? qu?? tr??nh t??ng tr?????ng v?? ph??t tri???n</p>\r\n                          <p>- T??ng c?????ng qu?? tr??nh trao ?????i ch???t h??? tr??? qu?? tr??nh t??ng tr?????ng v?? ph??t tri???n</p>\r\n                          <p>- T??ng c?????ng qu?? tr??nh trao ?????i ch???t h??? tr??? qu?? tr??nh t??ng tr?????ng v?? ph??t tri???n</p>\r\n                          <h3>Li???u d??ng</h3>   \r\n                          <p>- S??? d???ng ?????nh k??? (b??? sung) 3-4g/kg th???c ??n</p>     \r\n                          <p>- Khi t??m c?? gi???m ??n, m??i tr?????ng thay ?????i, m???i b??? b???nh m???i t??ng li???u g???p ????i</p>                       \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n  <!-- detail-end -->\r\n\r\n\r\n  <footer class=\"footer footer-big footer-color-black\" data-color=\"black\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\">C??ng ty TNHH ?????u t?? v?? ph??t tri???n Minh Ph??</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-home\"></i>\r\n                  <span>?????a ch???: L???u 10, 161-163 Tr???n Qu???c Th???o, Ph?????ng 09, Qu???n 03, Th??nh ph??? H??? Ch?? Minh</span>\r\n                </li>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-phone-square\"></i>\r\n                  <span>Hotline: 0949.509.8888</span>\r\n                </li>\r\n                <li>\r\n                  <i aria-hidden=\"true\" class=\"fa fa-phone-square\"></i>\r\n                  <span>thangdau811@gmail.com</span>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\"> Help and Support</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\">Contact Us</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">How it works</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Terms &amp; Conditions</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Company Policy</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\">Money Back</a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-8\">\r\n          <div class=\"info\">\r\n            <h5 class=\"title\">Theo d??i ch??ng t??i tr??n</h5>\r\n            <nav>\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-facebook btn-simple\">\r\n                    <i class=\"fa fa-facebook-square\"></i> Facebook\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-dribbble btn-simple\">\r\n                    <i class=\"fa fa-dribbble\"></i> Dribbble\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-twitter btn-simple\">\r\n                    <i class=\"fa fa-twitter\"></i> Twitter\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"btn btn-social btn-reddit btn-simple\">\r\n                    <i class=\"fa fa-google-plus-square\"></i> Google+\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"copyright\">\r\n        ??\r\n        <script> document.write(new Date().getFullYear())</script> Creative Tim, made with love\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n\r\n<!--   core js files    -->\r\n<script src=\"../../assets/js/jquery.min.js\" type=\"text/javascript\"></script>\r\n<script src=\"../../assets/js/bootstrap.js\" type=\"text/javascript\"></script>\r\n\r\n<!--  js library for devices recognition -->\r\n<script type=\"text/javascript\" src=\"assets/js/modernizr.js\"></script>\r\n\r\n<!--  script for google maps   -->\r\n<script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js\"></script>\r\n\r\n<!--   file where we handle all the script from the Gaia - Bootstrap Template   -->\r\n<script type=\"text/javascript\" src=\"../../assets/js/gaia.js\"></script>\r\n\r\n</html>"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(470);


/***/ })

},[940]);
//# sourceMappingURL=main.bundle.js.map