(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-page-options-page-module"],{

/***/ "./src/app/options-page/input-local-model/input-local-model.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/options-page/input-local-model/input-local-model.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InputLocalModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLocalModelComponent", function() { return InputLocalModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



var InputLocalModelComponent = /** @class */ (function () {
    function InputLocalModelComponent() {
        this.fileEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputLocalModelComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        this.emitFileUrl(files);
    };
    InputLocalModelComponent.prototype.ngOnInit = function () {
        this.dragAreaClass = "dragarea";
    };
    InputLocalModelComponent.prototype.onDragOver = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    InputLocalModelComponent.prototype.onDragEnter = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    InputLocalModelComponent.prototype.onDragEnd = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    InputLocalModelComponent.prototype.onDragLeave = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    InputLocalModelComponent.prototype.onDrop = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files) {
            var files = event.dataTransfer.files;
            this.emitFileUrl(files);
        }
    };
    InputLocalModelComponent.prototype.emitFileUrl = function (files) {
        if (files.length !== 1) {
            return;
        }
        this.fileEmit.emit(files[0]);
    };
    InputLocalModelComponent.ɵfac = function InputLocalModelComponent_Factory(t) { return new (t || InputLocalModelComponent)(); };
    InputLocalModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputLocalModelComponent, selectors: [["app-input-local-model"]], hostBindings: function InputLocalModelComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function InputLocalModelComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragenter", function InputLocalModelComponent_dragenter_HostBindingHandler($event) { return ctx.onDragEnter($event); })("dragend", function InputLocalModelComponent_dragend_HostBindingHandler($event) { return ctx.onDragEnd($event); })("dragleave", function InputLocalModelComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function InputLocalModelComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
        } }, outputs: { fileEmit: "fileChange" }, decls: 9, vars: 2, consts: [[1, "container"], [1, "panel", "panel-default"], [1, "panel-body"], ["draggable", "true", "id", "drop-zone", 1, "upload-drop-zone", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click"], ["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function InputLocalModelComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Drag model here ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputLocalModelComponent_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.click(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " or click to open ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputLocalModelComponent_Template_input_change_7_listener($event) { return ctx.onFileChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dragAreaClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".upload-drop-zone[_ngcontent-%COMP%] {\n    height: 200px;\n    border-width: 2px;\n    margin-bottom: 20px;\n}\n\n.upload-drop-zone[_ngcontent-%COMP%] {\n    color: #ccc;\n    border-style: dashed;\n    border-color: #ccc;\n    line-height: 200px;\n    text-align: center\n}\n.upload-drop-zone.drop[_ngcontent-%COMP%] {\n    color: #222;\n    border-color: #222;\n}\n.error[_ngcontent-%COMP%] {\n    color: #f00;\n}\n.dragarea[_ngcontent-%COMP%] {\n\n    background-color: #fff;\n    color: #bbb;\n}\n.droparea[_ngcontent-%COMP%] {\n\n    background-color: #eff;\n    color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy1wYWdlL2lucHV0LWxvY2FsLW1vZGVsL2lucHV0LWxvY2FsLW1vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksV0FBVztBQUNmO0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9vcHRpb25zLXBhZ2UvaW5wdXQtbG9jYWwtbW9kZWwvaW5wdXQtbG9jYWwtbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxheW91dC5jc3MgU3R5bGUgKi9cbi51cGxvYWQtZHJvcC16b25lIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIHNraW4uY3NzIFN0eWxlKi9cbi51cGxvYWQtZHJvcC16b25lIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgbGluZS1oZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4udXBsb2FkLWRyb3Atem9uZS5kcm9wIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XG59XG5cblxuLmVycm9yIHtcbiAgICBjb2xvcjogI2YwMDtcbn1cblxuLmRyYWdhcmVhIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNiYmI7XG59XG5cbi5kcm9wYXJlYSB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmO1xuICAgIGNvbG9yOiAjYWFhO1xufVxuIl19 */"] });
    return InputLocalModelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputLocalModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-input-local-model",
                templateUrl: "./input-local-model.component.html",
                styleUrls: ["./input-local-model.component.css"]
            }]
    }], function () { return []; }, { fileEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["fileChange"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragover", ["$event"]]
        }], onDragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragenter", ["$event"]]
        }], onDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragend", ["$event"]]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["dragleave", ["$event"]]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["drop", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/options-page/options-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/options-page/options-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageRoutingModule", function() { return OptionsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options-page/options/options.component.ts");





var routes = [
    { path: "", component: _options_options_component__WEBPACK_IMPORTED_MODULE_2__["OptionsComponent"] }
];
var OptionsPageRoutingModule = /** @class */ (function () {
    function OptionsPageRoutingModule() {
    }
    OptionsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OptionsPageRoutingModule });
    OptionsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OptionsPageRoutingModule_Factory(t) { return new (t || OptionsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return OptionsPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OptionsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/options-page/options-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/options-page/options-page.module.ts ***!
  \*****************************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _options_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-page-routing.module */ "./src/app/options-page/options-page-routing.module.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options-page/options/options.component.ts");
/* harmony import */ var _input_local_model_input_local_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-local-model/input-local-model.component */ "./src/app/options-page/input-local-model/input-local-model.component.ts");
/* harmony import */ var _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner/spinner.module */ "./src/app/spinner/spinner.module.ts");







var OptionsPageModule = /** @class */ (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OptionsPageModule });
    OptionsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OptionsPageModule_Factory(t) { return new (t || OptionsPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _options_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["OptionsPageRoutingModule"],
                _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__["SpinnerModule"]
            ]] });
    return OptionsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OptionsPageModule, { declarations: [_options_options_component__WEBPACK_IMPORTED_MODULE_3__["OptionsComponent"], _input_local_model_input_local_model_component__WEBPACK_IMPORTED_MODULE_4__["InputLocalModelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _options_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["OptionsPageRoutingModule"],
        _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__["SpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_options_options_component__WEBPACK_IMPORTED_MODULE_3__["OptionsComponent"], _input_local_model_input_local_model_component__WEBPACK_IMPORTED_MODULE_4__["InputLocalModelComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _options_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["OptionsPageRoutingModule"],
                    _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__["SpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/options-page/options/options.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/options-page/options/options.component.ts ***!
  \***********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/browser-user-interface/browser-user-interface.service */ "./src/app/services/browser-user-interface/browser-user-interface.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _input_local_model_input_local_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-local-model/input-local-model.component */ "./src/app/options-page/input-local-model/input-local-model.component.ts");






function OptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Loading model ", ctx_r0.fileName, " ... ");
} }
function OptionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-local-model", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileChange", function OptionsComponent_ng_template_1_Template_app_input_local_model_fileChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendLocalModel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " successful loaded\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unable do load model, please report this on github\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(userInterfaceService, changeDetectorRef) {
        this.userInterfaceService = userInterfaceService;
        this.changeDetectorRef = changeDetectorRef;
        this.loadStatusType = {
            notLoad: 0,
            loadSuccess: 1,
            loadError: 2
        };
        this.loadStatus = this.loadStatusType.notLoad;
        this.timeOutInMilliseconds = 3000;
    }
    OptionsComponent.prototype.ngOnInit = function () {
        this.userInterfaceService.addCnnModelSettingsObserver({
            next: this.currentSettingsNotification.bind(this),
            error: function () {
            },
            complete: function () {
            }
        });
    };
    OptionsComponent.prototype.sendLocalModel = function (file) {
        var url = URL.createObjectURL(file);
        this.fileName = file.name;
        this.userInterfaceService.selectLocalModel(url);
    };
    OptionsComponent.prototype.currentSettingsNotification = function (notification) {
        console.log("Options  Current Settings Notification");
        if (this.fileName === undefined) {
            return;
        }
        this.fileName = undefined;
        if (notification.cnnModelHub.url) {
            this.loadStatus = this.loadStatusType.loadSuccess;
        }
        else {
            this.loadStatus = this.loadStatusType.loadError;
        }
        setTimeout(this.removeSuccessMessage.bind(this), this.timeOutInMilliseconds);
        this.changeDetectorRef.detectChanges();
    };
    OptionsComponent.prototype.removeSuccessMessage = function () {
        this.loadStatus = this.loadStatusType.notLoad;
        this.changeDetectorRef.detectChanges();
    };
    OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_1__["BrowserUserInterfaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 5, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["inputModel", ""], ["class", "alert alert-success container text-center", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger container text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-primary", "container", "text-center"], [3, "fileChange"], ["role", "alert", 1, "alert", "alert-success", "container", "text-center"], ["role", "alert", 1, "alert", "alert-danger", "container", "text-center"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OptionsComponent_div_0_Template, 4, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OptionsComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_3_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OptionsComponent_div_4_Template, 2, 0, "div", 3);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileName)("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadStatus == 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadStatus == 2);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _input_local_model_input_local_model_component__WEBPACK_IMPORTED_MODULE_4__["InputLocalModelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMtcGFnZS9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
    return OptionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-options",
                templateUrl: "./options.component.html",
                styleUrls: ["./options.component.css"]
            }]
    }], function () { return [{ type: _services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_1__["BrowserUserInterfaceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.color = "";
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { color: "color" }, decls: 5, vars: 3, consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "row"], ["role", "status"], [1, "sr-only"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("spinner-border ", ctx.color, " ");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"] });
    return SpinnerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-spinner",
                templateUrl: "./spinner.component.html",
                styleUrls: ["./spinner.component.css"]
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/spinner/spinner.module.ts":
/*!*******************************************!*\
  !*** ./src/app/spinner/spinner.module.ts ***!
  \*******************************************/
/*! exports provided: SpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "./src/app/spinner/spinner.component.ts");




var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpinnerModule });
    SpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return SpinnerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=options-page-options-page-module.js.map