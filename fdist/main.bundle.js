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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-text {\r\n  padding-left: .5em;\r\n}\r\n.valign-center {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.button-container {\r\n  width: 100%;\r\n}\r\nbutton {\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-container\">\n  <button (click)=\"openSampleDialog()\" class=\"valign-center\" >\n    <i class=\"material-icons md-18\">person_add</i>\n    <span class=\"button-text\">Open Dialog</span>\n  </button>\n</div>\n<div *ngIf=\"inputFromDialog.length !== 0\"  >\n  <label>Input from Dialog:</label>\n  <span>{{ inputFromDialog }}</span>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_dialog_sample_dialog_component__ = __webpack_require__("../../../../../src/app/sample-dialog/sample-dialog.component.ts");
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
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.inputFromDialog = '';
    }
    AppComponent.prototype.openSampleDialog = function () {
        var _this = this;
        var multiAssignDlg = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__sample_dialog_sample_dialog_component__["a" /* SampleDialogComponent */], {
            data: { sampleInput: this.inputFromDialog }
        });
        multiAssignDlg.afterClosed().subscribe(function (res) {
            // Collect data output from Dialog
            if (res && res.sampleInput) {
                _this.inputFromDialog = res.sampleInput;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sample_dialog_sample_dialog_component__ = __webpack_require__("../../../../../src/app/sample-dialog/sample-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_xrm_integration_service__ = __webpack_require__("../../../../../src/app/services/xrm-integration.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sample_dialog_sample_dialog_component__["a" /* SampleDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__sample_dialog_sample_dialog_component__["a" /* SampleDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["c" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_xrm_integration_service__["a" /* XrmIntegrationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/sample-dialog/sample-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample-dialog/sample-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  Sample Input Dialog\n</h2>\n<div>\n  <mat-label>Parent Entity ID:</mat-label>\n  <span>{{ parentEntityId }}</span>\n</div>\n<form>\n<div>\n  <mat-label>Sample Input</mat-label>\n  <input type=\"text\" matInput dense name=\"sampleInput\" [(ngModel)]=\"sampleInput\"\n    aria-label=\"Sample Input\" >\n</div>\n<div style=\"float:right; padding-right:1em;\">\n  <button title=\"OK - Save Sample Input\" id=\"saveInputBtn\"\n    [disabled]=\"isValidInput()\"\n    (click)=\"saveSampleInput()\">OK</button>\n  <button title=\"Cancel\" id=\"cancelBtn\"\n    (click)=\"cancelSampleInput()\">Cancel</button>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/sample-dialog/sample-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_xrm_integration_service__ = __webpack_require__("../../../../../src/app/services/xrm-integration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SampleDialogComponent = /** @class */ (function () {
    function SampleDialogComponent(dialogRef, dlgData, xrmIntegrationSvc) {
        this.dialogRef = dialogRef;
        this.dlgData = dlgData;
        this.xrmIntegrationSvc = xrmIntegrationSvc;
        this.sampleInput = '';
        this.parentEntityId = '';
    }
    SampleDialogComponent.prototype.ngOnInit = function () {
        var parentXrm = this.xrmIntegrationSvc.getParentXrm();
        if (parentXrm !== null) {
            this.parentEntityId = parentXrm.Page.data.entity.getId();
        }
        else {
            this.parentEntityId = 'No XRM Integration';
        }
    };
    SampleDialogComponent.prototype.isValidInput = function () {
        return this.sampleInput.length === 0;
    };
    SampleDialogComponent.prototype.saveSampleInput = function () {
        this.dlgData.sampleInput = this.sampleInput;
        this.dialogRef.close(this.dlgData);
    };
    SampleDialogComponent.prototype.cancelSampleInput = function () {
        this.dialogRef.close(this.dlgData);
    };
    SampleDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sample-dialog',
            template: __webpack_require__("../../../../../src/app/sample-dialog/sample-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample-dialog/sample-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_xrm_integration_service__["a" /* XrmIntegrationService */]])
    ], SampleDialogComponent);
    return SampleDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/xrm-integration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XrmIntegrationService; });
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

var XrmIntegrationService = /** @class */ (function () {
    function XrmIntegrationService() {
    }
    XrmIntegrationService_1 = XrmIntegrationService;
    XrmIntegrationService.prototype.getParentXrm = function () {
        if (!XrmIntegrationService_1.xrmParentChecked && XrmIntegrationService_1.xrmParent === null) {
            if (('parent' in window) && 'Xrm' in window.parent) {
                XrmIntegrationService_1.xrmParent = window.parent['Xrm'];
            }
            XrmIntegrationService_1.xrmParentChecked = true;
        }
        return XrmIntegrationService_1.xrmParent;
    };
    XrmIntegrationService.prototype.isGuidEmpty = function (value) {
        return value === null // NULL value
            || value === undefined // undefined
            || value === 'undefined' // undefined
            || value.length === 0 // Array is empty
            || value === '00000000-0000-0000-0000-000000000000'; // Guid empty
    };
    XrmIntegrationService.xrmParent = null;
    XrmIntegrationService.xrmParentChecked = false;
    XrmIntegrationService = XrmIntegrationService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], XrmIntegrationService);
    return XrmIntegrationService;
    var XrmIntegrationService_1;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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