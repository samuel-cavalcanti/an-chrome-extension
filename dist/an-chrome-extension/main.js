(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _background_page_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-page/background.component */ "./src/app/background-page/background.component.ts");





var routes = [
    { path: "filters", loadChildren: function () { return Promise.all(/*! import() | filters-page-filters-module */[__webpack_require__.e("default~filters-page-filters-module~models-page-cnn-models-module"), __webpack_require__.e("filters-page-filters-module")]).then(__webpack_require__.bind(null, /*! ./filters-page/filters.module */ "./src/app/filters-page/filters.module.ts")).then(function (m) { return m.FiltersModule; }); } },
    { path: "models", loadChildren: function () { return Promise.all(/*! import() | models-page-cnn-models-module */[__webpack_require__.e("default~filters-page-filters-module~models-page-cnn-models-module"), __webpack_require__.e("models-page-cnn-models-module")]).then(__webpack_require__.bind(null, /*! ./models-page/cnn-models.module */ "./src/app/models-page/cnn-models.module.ts")).then(function (m) { return m.CnnModelsModule; }); } },
    { path: "options", loadChildren: function () { return __webpack_require__.e(/*! import() | options-page-options-page-module */ "options-page-options-page-module").then(__webpack_require__.bind(null, /*! ./options-page/options-page.module */ "./src/app/options-page/options-page.module.ts")).then(function (m) { return m.OptionsPageModule; }); } },
    { path: "background", component: _background_page_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/nav-bar.component */ "./src/app/navbar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "nan-chrome-extension";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        } }, directives: [_navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/nav-bar.component */ "./src/app/navbar/nav-bar.component.ts");
/* harmony import */ var _services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/browser-user-interface/browser-user-interface.service */ "./src/app/services/browser-user-interface/browser-user-interface.service.ts");
/* harmony import */ var _background_page_background_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background-page/background.module */ "./src/app/background-page/background.module.ts");








// @ts-ignore
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_5__["BrowserUserInterfaceService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _background_page_background_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _background_page_background_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _background_page_background_module__WEBPACK_IMPORTED_MODULE_6__["BackgroundModule"],
                ],
                providers: [_services_browser_user_interface_browser_user_interface_service__WEBPACK_IMPORTED_MODULE_5__["BrowserUserInterfaceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/background-page/background-communication/chrome-browser/chrome-background-communication.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/background-page/background-communication/chrome-browser/chrome-background-communication.ts ***!
  \************************************************************************************************************/
/*! exports provided: GET_CURRENT_SETTINGS_MESSAGE, GET_LOCAL_CLASS_NAME_URLS, ChromeBackgroundCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_SETTINGS_MESSAGE", function() { return GET_CURRENT_SETTINGS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOCAL_CLASS_NAME_URLS", function() { return GET_LOCAL_CLASS_NAME_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeBackgroundCommunication", function() { return ChromeBackgroundCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _utils_browser_communication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/browser-communication */ "./src/utils/browser-communication.ts");
/* harmony import */ var _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/user-interface-communication */ "./src/utils/user-interface-communication.ts");




var GET_CURRENT_SETTINGS_MESSAGE = "get current cnn settings";
var GET_LOCAL_CLASS_NAME_URLS = " get local class name urls";
var ChromeBackgroundCommunication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChromeBackgroundCommunication, _super);
    function ChromeBackgroundCommunication() {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.callbacks = (_a = {},
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].Notification] = _this.simpleNotifications.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ContentNotification] = _this.notifyImages.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].TensorFlowHubModelNotification] = _this.notifyCnnSettings.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].LocalModelInputNotification] = _this.loadLocalModel.bind(_this),
            _a);
        _this.storeKey = "settings";
        _this.localClassesNames = (_b = {},
            _b["imagenet-ilsvrc-2012-cls"] = chrome.runtime.getURL("assets/modelJS/Image-net-class.json"),
            _b);
        _this.ports = {};
        return _this;
    }
    ChromeBackgroundCommunication.prototype.checkPermissions = function () {
        if (chrome.runtime === undefined || chrome.runtime.getURL === undefined) {
            throw ChromeBackgroundCommunication.erros.enableContentScript;
        }
        if (chrome.storage === undefined) {
            throw ChromeBackgroundCommunication.erros.enableStorage;
        }
    };
    ChromeBackgroundCommunication.prototype.tryToStart = function () {
        console.log("stating browser listener ...");
        try {
            this.checkPermissions();
            chrome.runtime.onConnect.addListener(this.onConnect.bind(this));
            this.loadLocalData();
            this.sendClassNameUrls();
        }
        catch (e) {
            console.log("Unable to  start runtime");
            console.log(e);
        }
    };
    ChromeBackgroundCommunication.prototype.complete = function () {
    };
    ChromeBackgroundCommunication.prototype.error = function (e) {
    };
    ChromeBackgroundCommunication.prototype.next = function (notification) {
        if (this.ports[notification.id]) {
            this.ports[notification.id].postMessage(notification);
        }
        if (notification.type === _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].TensorFlowHubModelNotification) {
            console.log("Chrome Background salvando Notificação", notification);
            this.storeSettings(notification);
        }
    };
    ChromeBackgroundCommunication.prototype.onConnect = function (port) {
        this.ports[port.name] = port;
        port.onMessage.addListener(this.listener.bind(this));
        port.onDisconnect.addListener(this.disconnect.bind(this));
    };
    ChromeBackgroundCommunication.prototype.listener = function (notification, port) {
        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification, port);
        }
    };
    ChromeBackgroundCommunication.prototype.disconnect = function (port) {
        delete this.ports[port.name];
    };
    ChromeBackgroundCommunication.prototype.notifyImages = function (notification, port) {
        var e_1, _a;
        var urlImages = notification.urlImages;
        if (port === undefined) {
            throw ChromeBackgroundCommunication.erros.uuidUndefined;
        }
        if (urlImages === undefined) {
            throw ChromeBackgroundCommunication.erros.urlsUndefined;
        }
        try {
            for (var urlImages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(urlImages), urlImages_1_1 = urlImages_1.next(); !urlImages_1_1.done; urlImages_1_1 = urlImages_1.next()) {
                var url = urlImages_1_1.value;
                if (url) {
                    this.subject.next({ message: url, id: port.name, type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ImageSourceNotification });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (urlImages_1_1 && !urlImages_1_1.done && (_a = urlImages_1.return)) _a.call(urlImages_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ChromeBackgroundCommunication.prototype.notifyCnnSettings = function (notification, port) {
        notification.id = port.name;
        this.subject.next(notification);
    };
    ChromeBackgroundCommunication.prototype.loadLocalData = function () {
        chrome.storage.local.get([this.storeKey], this.callbackStorage.bind(this));
    };
    ChromeBackgroundCommunication.prototype.callbackStorage = function (result) {
        var notification = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result.settings), { type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].TensorFlowHubModelNotification, id: _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_3__["USER_INTERFACE_COMMUNICATION_ID"] });
        if (result.settings) {
            this.subject.next(notification);
            this.next(notification);
        }
        else if (this.currentUserInterfacePort) {
            this.next({
                id: this.currentUserInterfacePort.name,
                cnnModelHub: {},
                classNames: {},
                type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].TensorFlowHubModelNotification
            });
        }
    };
    ChromeBackgroundCommunication.prototype.storeSettings = function (settings) {
        var _a;
        chrome.storage.local.set((_a = {}, _a[this.storeKey] = settings, _a));
    };
    ChromeBackgroundCommunication.prototype.simpleNotifications = function (notification, port) {
        if (notification.message === GET_CURRENT_SETTINGS_MESSAGE) {
            this.currentUserInterfacePort = port;
            this.loadLocalData();
        }
        else if (notification.message === GET_LOCAL_CLASS_NAME_URLS) {
            this.sendClassNameUrls();
        }
    };
    ChromeBackgroundCommunication.prototype.sendClassNameUrls = function () {
        this.subject.next({
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ClassNameUrlsNotification,
            urls: this.localClassesNames
        });
    };
    ChromeBackgroundCommunication.prototype.loadLocalModel = function (notification, port) {
        this.subject.next(notification);
    };
    ChromeBackgroundCommunication.erros = {
        enableContentScript: new Error("Must enable Chrome Content Scripts"),
        enableStorage: new Error("Must add Storage permission"),
        uuidUndefined: new Error("UUID undefined"),
        urlsUndefined: new Error("URLS undefined")
    };
    return ChromeBackgroundCommunication;
}(_utils_browser_communication__WEBPACK_IMPORTED_MODULE_2__["BrowserCommunication"]));



/***/ }),

/***/ "./src/app/background-page/background.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/background-page/background.component.ts ***!
  \*********************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _convolutional_neural_network_convolutional_neural_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convolutional-neural-network/convolutional-neural-network */ "./src/app/background-page/convolutional-neural-network/convolutional-neural-network.ts");
/* harmony import */ var _load_image_load_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-image/load-image */ "./src/app/background-page/load-image/load-image.ts");
/* harmony import */ var _classifier_manager_classifier_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classifier-manager/classifier-manager */ "./src/app/background-page/classifier-manager/classifier-manager.ts");
/* harmony import */ var _background_communication_chrome_browser_chrome_background_communication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-communication/chrome-browser/chrome-background-communication */ "./src/app/background-page/background-communication/chrome-browser/chrome-background-communication.ts");






var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.cnnSettings = new _classifier_manager_classifier_manager__WEBPACK_IMPORTED_MODULE_3__["ClassifierManager"]();
        this.cnn = new _convolutional_neural_network_convolutional_neural_network__WEBPACK_IMPORTED_MODULE_1__["ConvolutionalNeuralNetwork"]();
        this.loadImage = new _load_image_load_image__WEBPACK_IMPORTED_MODULE_2__["LoadImage"]();
        this.browser = BackgroundComponent.selectBrowserBackgroundCommunication();
        this.subscribes();
        this.startFilter();
    }
    BackgroundComponent.selectBrowserBackgroundCommunication = function () {
        if (chrome) {
            return new _background_communication_chrome_browser_chrome_background_communication__WEBPACK_IMPORTED_MODULE_4__["ChromeBackgroundCommunication"]();
        }
        else {
            throw new Error("Not implemented");
        }
    };
    BackgroundComponent.prototype.startFilter = function () {
        this.browser.tryToStart();
    };
    BackgroundComponent.prototype.subscribes = function () {
        this.cnn.addObserver(this.browser);
        this.cnn.addObserver(this.loadImage);
        this.cnn.addObserver(this.cnnSettings);
        this.loadImage.addObserver(this.browser);
        this.loadImage.addObserver(this.cnnSettings);
        this.browser.addObserver(this.cnn);
        this.browser.addObserver(this.cnnSettings);
        this.cnnSettings.addObserver(this.browser);
    };
    BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
    BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], decls: 2, vars: 0, template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "background works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return BackgroundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-background",
                templateUrl: "./background.component.html",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/background-page/background.module.ts":
/*!******************************************************!*\
  !*** ./src/app/background-page/background.module.ts ***!
  \******************************************************/
/*! exports provided: BackgroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundModule", function() { return BackgroundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.component */ "./src/app/background-page/background.component.ts");




var BackgroundModule = /** @class */ (function () {
    function BackgroundModule() {
    }
    BackgroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackgroundModule });
    BackgroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackgroundModule_Factory(t) { return new (t || BackgroundModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return BackgroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackgroundModule, { declarations: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/background-page/classifier-manager/classifier-manager.ts":
/*!**************************************************************************!*\
  !*** ./src/app/background-page/classifier-manager/classifier-manager.ts ***!
  \**************************************************************************/
/*! exports provided: ClassifierManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifierManager", function() { return ClassifierManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/module */ "./src/utils/module.ts");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _cnn_loaders_tensorhub_loader_tensor_hub_model_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cnn-loaders/tensorhub-loader/tensor-hub-model-loader */ "./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/tensor-hub-model-loader.ts");
/* harmony import */ var _cnn_loaders_input_button_loader_input_button_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cnn-loaders/input-button-loader/input-button-loader */ "./src/app/background-page/classifier-manager/cnn-loaders/input-button-loader/input-button-loader.ts");





var ClassifierManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassifierManager, _super);
    function ClassifierManager() {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.callbacks = (_a = {},
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].TensorFlowHubModelNotification] = _this.tensorHubNotification.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].LocalModelInputNotification] = _this.tryToUpdateCnnModel.bind(_this),
            _a);
        _this.waysToLoadModel = (_b = {},
            _b[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].TensorFlowHubModelNotification] = _cnn_loaders_tensorhub_loader_tensor_hub_model_loader__WEBPACK_IMPORTED_MODULE_3__["TensorHubModelLoader"],
            _b[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].LocalModelInputNotification] = _cnn_loaders_input_button_loader_input_button_loader__WEBPACK_IMPORTED_MODULE_4__["InputButtonLoader"],
            _b);
        return _this;
    }
    ClassifierManager.prototype.next = function (message) {
        if (this.callbacks[message.type]) {
            this.callbacks[message.type](message);
        }
    };
    ClassifierManager.prototype.complete = function () {
    };
    ClassifierManager.prototype.error = function (e) {
    };
    ClassifierManager.prototype.tryToUpdateCnnModel = function (notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.updateCnnModel(notification)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.warn("Unable update cnn : ", e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassifierManager.prototype.tensorHubNotification = function (notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.needToUpdateCnnModel(notification)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateCnnModel(notification)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.updateSetting(notification);
                        this.notify();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassifierManager.prototype.updateCnnModel = function (notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modelLoader, settings, model;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelLoader = new this.waysToLoadModel[notification.type](notification);
                        return [4 /*yield*/, modelLoader.getSettings()];
                    case 1:
                        settings = _a.sent();
                        return [4 /*yield*/, modelLoader.getCnnModel()];
                    case 2:
                        model = _a.sent();
                        this.updateSetting(settings);
                        this.notify(model);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassifierManager.prototype.needToUpdateCnnModel = function (settings) {
        return this.needToUpdateModel(settings.cnnModelHub.url) || this.needToUpdateClassNames(settings.cnnModelHub.dataset);
    };
    ClassifierManager.prototype.notify = function (cnnModel) {
        console.log("notificando  observers", this.currentSettings, "CNN Model", cnnModel);
        this.notifyCnn(cnnModel);
        this.notifyUserInterface();
    };
    ClassifierManager.prototype.needToUpdateModel = function (url) {
        if (!url) {
            return false;
        }
        if (!this.currentSettings) {
            return true;
        }
        if (!this.currentSettings.cnnModelHub) {
            return true;
        }
        return this.currentSettings.cnnModelHub.url !== url;
    };
    ClassifierManager.prototype.needToUpdateClassNames = function (dataset) {
        if (!dataset) {
            return false;
        }
        if (!this.currentSettings) {
            return true;
        }
        if (!this.currentSettings.cnnModelHub.dataset) {
            return true;
        }
        return this.currentSettings.cnnModelHub.dataset !== dataset;
    };
    ClassifierManager.prototype.updateSetting = function (settings) {
        var enables = settings.enables ? settings.enables : Object.values(settings.classNames).map(function () { return true; });
        var oldSettings = this.currentSettings ? this.currentSettings : {};
        this.currentSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldSettings), settings), { enables: enables });
    };
    ClassifierManager.prototype.notifyCnn = function (cnnModel) {
        var cnnMessage = {
            id: "ConvolutionalNeuralNetworkSettings",
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].CnnModelSettingNotification,
            cnnModel: cnnModel,
            classNames: this.currentSettings.classNames,
            enables: this.currentSettings.enables
        };
        this.subject.next(cnnMessage);
    };
    ClassifierManager.prototype.notifyUserInterface = function () {
        this.subject.next(this.currentSettings);
    };
    return ClassifierManager;
}(_utils_module__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/app/background-page/classifier-manager/cnn-loaders/input-button-loader/input-button-loader.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/background-page/classifier-manager/cnn-loaders/input-button-loader/input-button-loader.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InputButtonLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButtonLoader", function() { return InputButtonLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_cnn_model_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/cnn-model-loader */ "./src/utils/cnn-model-loader.ts");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/user-interface-communication */ "./src/utils/user-interface-communication.ts");






var InputButtonLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InputButtonLoader, _super);
    function InputButtonLoader(notification) {
        var _this = _super.call(this, notification) || this;
        _this.settingsFileName = "settings.json";
        return _this;
    }
    InputButtonLoader.xmlRequest = function (path, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.addEventListener("load", function () {
                            resolve(xhr.response);
                        });
                        xhr.addEventListener("error", function () {
                            reject("Error not solver request");
                        });
                        xhr.open("GET", path, true);
                        if (type) {
                            xhr.responseType = type;
                        }
                        xhr.send();
                    })];
            });
        });
    };
    InputButtonLoader.prototype.getSettings = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var settingsPath, json, settings;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.downloadZipFile()];
                    case 1:
                        _a.sent();
                        settingsPath = this.recoverySettingsPath();
                        console.log(settingsPath, this.zipDir);
                        return [4 /*yield*/, this.zipDir.files[settingsPath].async("text")];
                    case 2:
                        json = _a.sent();
                        settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, JSON.parse(json)), { type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].TensorFlowHubModelNotification, id: _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_5__["USER_INTERFACE_COMMUNICATION_ID"] });
                        this.zipDir.remove(settingsPath);
                        console.log("Zip files", this.zipDir.files);
                        return [2 /*return*/, settings];
                }
            });
        });
    };
    InputButtonLoader.prototype.getCnnModel = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var files;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.downloadZipFile()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.zipFilesToFiles()];
                    case 2:
                        files = _a.sent();
                        console.log(this.zipDir, files);
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["loadGraphModel"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["io"].browserFiles(files))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InputButtonLoader.prototype.requestZipFile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("loadZipDir notification", this.notification.message);
                        return [4 /*yield*/, InputButtonLoader.xmlRequest(this.notification.message, "arraybuffer")];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, jszip__WEBPACK_IMPORTED_MODULE_4__["loadAsync"](data)];
                    case 2:
                        _a.zipDir = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InputButtonLoader.prototype.downloadZipFile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.zipDir) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.requestZipFile()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    InputButtonLoader.prototype.recoverySettingsPath = function () {
        var e_1, _a;
        var zipFiles = Object.values(this.zipDir.files);
        try {
            for (var zipFiles_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(zipFiles), zipFiles_1_1 = zipFiles_1.next(); !zipFiles_1_1.done; zipFiles_1_1 = zipFiles_1.next()) {
                var file = zipFiles_1_1.value;
                if (file.dir) {
                    return file.name + this.settingsFileName;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (zipFiles_1_1 && !zipFiles_1_1.done && (_a = zipFiles_1.return)) _a.call(zipFiles_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw Error("Zip need to have root dir ");
    };
    InputButtonLoader.prototype.zipFilesToFiles = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var zipFiles, files, jsonFile, _a, _b, zipFile, blob, file, e_2_1;
            var e_2, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        zipFiles = this.zipDir.files;
                        files = new Array();
                        jsonFile = null;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.values(zipFiles)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        zipFile = _b.value;
                        if (zipFile.dir || zipFile.name.indexOf(this.settingsFileName) !== -1) {
                            return [3 /*break*/, 4];
                        }
                        return [4 /*yield*/, zipFile.async("blob")];
                    case 3:
                        blob = _d.sent();
                        file = new File([blob], zipFile.name);
                        if (zipFile.name.indexOf("model.json") !== -1) {
                            jsonFile = file;
                        }
                        else {
                            files.push(file);
                        }
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([jsonFile], files)];
                }
            });
        });
    };
    return InputButtonLoader;
}(_utils_cnn_model_loader__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/image-net-class-names.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/image-net-class-names.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IMAGE_NET_CLASSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_NET_CLASSES", function() { return IMAGE_NET_CLASSES; });
var IMAGE_NET_CLASSES = "{\n  \"0\": \"tench, Tinca tinca\",\n  \"1\": \"goldfish, Carassius auratus\",\n  \"2\": \"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias\",\n  \"3\": \"tiger shark, Galeocerdo cuvieri\",\n  \"4\": \"hammerhead, hammerhead shark\",\n  \"5\": \"electric ray, crampfish, numbfish, torpedo\",\n  \"6\": \"stingray\",\n  \"7\": \"cock\",\n  \"8\": \"hen\",\n  \"9\": \"ostrich, Struthio camelus\",\n  \"10\": \"brambling, Fringilla montifringilla\",\n  \"11\": \"goldfinch, Carduelis carduelis\",\n  \"12\": \"house finch, linnet, Carpodacus mexicanus\",\n  \"13\": \"junco, snowbird\",\n  \"14\": \"indigo bunting, indigo finch, indigo bird, Passerina cyanea\",\n  \"15\": \"robin, American robin, Turdus migratorius\",\n  \"16\": \"bulbul\",\n  \"17\": \"jay\",\n  \"18\": \"magpie\",\n  \"19\": \"chickadee\",\n  \"20\": \"water ouzel, dipper\",\n  \"21\": \"kite\",\n  \"22\": \"bald eagle, American eagle, Haliaeetus leucocephalus\",\n  \"23\": \"vulture\",\n  \"24\": \"great grey owl, great gray owl, Strix nebulosa\",\n  \"25\": \"European fire salamander, Salamandra salamandra\",\n  \"26\": \"common newt, Triturus vulgaris\",\n  \"27\": \"eft\",\n  \"28\": \"spotted salamander, Ambystoma maculatum\",\n  \"29\": \"axolotl, mud puppy, Ambystoma mexicanum\",\n  \"30\": \"bullfrog, Rana catesbeiana\",\n  \"31\": \"tree frog, tree-frog\",\n  \"32\": \"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui\",\n  \"33\": \"loggerhead, loggerhead turtle, Caretta caretta\",\n  \"34\": \"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea\",\n  \"35\": \"mud turtle\",\n  \"36\": \"terrapin\",\n  \"37\": \"box turtle, box tortoise\",\n  \"38\": \"banded gecko\",\n  \"39\": \"common iguana, iguana, Iguana iguana\",\n  \"40\": \"American chameleon, anole, Anolis carolinensis\",\n  \"41\": \"whiptail, whiptail lizard\",\n  \"42\": \"agama\",\n  \"43\": \"frilled lizard, Chlamydosaurus kingi\",\n  \"44\": \"alligator lizard\",\n  \"45\": \"Gila monster, Heloderma suspectum\",\n  \"46\": \"green lizard, Lacerta viridis\",\n  \"47\": \"African chameleon, Chamaeleo chamaeleon\",\n  \"48\": \"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis\",\n  \"49\": \"African crocodile, Nile crocodile, Crocodylus niloticus\",\n  \"50\": \"American alligator, Alligator mississipiensis\",\n  \"51\": \"triceratops\",\n  \"52\": \"thunder snake, worm snake, Carphophis amoenus\",\n  \"53\": \"ringneck snake, ring-necked snake, ring snake\",\n  \"54\": \"hognose snake, puff adder, sand viper\",\n  \"55\": \"green snake, grass snake\",\n  \"56\": \"king snake, kingsnake\",\n  \"57\": \"garter snake, grass snake\",\n  \"58\": \"water snake\",\n  \"59\": \"vine snake\",\n  \"60\": \"night snake, Hypsiglena torquata\",\n  \"61\": \"boa constrictor, Constrictor constrictor\",\n  \"62\": \"rock python, rock snake, Python sebae\",\n  \"63\": \"Indian cobra, Naja naja\",\n  \"64\": \"green mamba\",\n  \"65\": \"sea snake\",\n  \"66\": \"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus\",\n  \"67\": \"diamondback, diamondback rattlesnake, Crotalus adamanteus\",\n  \"68\": \"sidewinder, horned rattlesnake, Crotalus cerastes\",\n  \"69\": \"trilobite\",\n  \"70\": \"harvestman, daddy longlegs, Phalangium opilio\",\n  \"71\": \"scorpion\",\n  \"72\": \"black and gold garden spider, Argiope aurantia\",\n  \"73\": \"barn spider, Araneus cavaticus\",\n  \"74\": \"garden spider, Aranea diademata\",\n  \"75\": \"black widow, Latrodectus mactans\",\n  \"76\": \"tarantula\",\n  \"77\": \"wolf spider, hunting spider\",\n  \"78\": \"tick\",\n  \"79\": \"centipede\",\n  \"80\": \"black grouse\",\n  \"81\": \"ptarmigan\",\n  \"82\": \"ruffed grouse, partridge, Bonasa umbellus\",\n  \"83\": \"prairie chicken, prairie grouse, prairie fowl\",\n  \"84\": \"peacock\",\n  \"85\": \"quail\",\n  \"86\": \"partridge\",\n  \"87\": \"African grey, African gray, Psittacus erithacus\",\n  \"88\": \"macaw\",\n  \"89\": \"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita\",\n  \"90\": \"lorikeet\",\n  \"91\": \"coucal\",\n  \"92\": \"bee eater\",\n  \"93\": \"hornbill\",\n  \"94\": \"hummingbird\",\n  \"95\": \"jacamar\",\n  \"96\": \"toucan\",\n  \"97\": \"drake\",\n  \"98\": \"red-breasted merganser, Mergus serrator\",\n  \"99\": \"goose\",\n  \"100\": \"black swan, Cygnus atratus\",\n  \"101\": \"tusker\",\n  \"102\": \"echidna, spiny anteater, anteater\",\n  \"103\": \"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus\",\n  \"104\": \"wallaby, brush kangaroo\",\n  \"105\": \"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus\",\n  \"106\": \"wombat\",\n  \"107\": \"jelly fish\",\n  \"108\": \"sea anemone, anemone\",\n  \"109\": \"brain coral\",\n  \"110\": \"flatworm, platyhelminth\",\n  \"111\": \"nematode, nematode worm, roundworm\",\n  \"112\": \"conch\",\n  \"113\": \"snail\",\n  \"114\": \"slug\",\n  \"115\": \"sea slug, nudibranch\",\n  \"116\": \"chiton, coat-of-mail shell, sea cradle, polyplacophore\",\n  \"117\": \"chambered nautilus, pearly nautilus, nautilus\",\n  \"118\": \"Dungeness crab, Cancer magister\",\n  \"119\": \"rock crab, Cancer irroratus\",\n  \"120\": \"fiddler crab\",\n  \"121\": \"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica\",\n  \"122\": \"American lobster, Northern lobster, Maine lobster, Homarus americanus\",\n  \"123\": \"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish\",\n  \"124\": \"crayfish, crawfish, crawdad, crawdaddy\",\n  \"125\": \"hermit crab\",\n  \"126\": \"isopod\",\n  \"127\": \"white stork, Ciconia ciconia\",\n  \"128\": \"black stork, Ciconia nigra\",\n  \"129\": \"spoonbill\",\n  \"130\": \"flamingo\",\n  \"131\": \"little blue heron, Egretta caerulea\",\n  \"132\": \"American egret, great white heron, Egretta albus\",\n  \"133\": \"bittern\",\n  \"134\": \"crane\",\n  \"135\": \"limpkin, Aramus pictus\",\n  \"136\": \"European gallinule, Porphyrio porphyrio\",\n  \"137\": \"American coot, marsh hen, mud hen, water hen, Fulica americana\",\n  \"138\": \"bustard\",\n  \"139\": \"ruddy turnstone, Arenaria interpres\",\n  \"140\": \"red-backed sandpiper, dunlin, Erolia alpina\",\n  \"141\": \"redshank, Tringa totanus\",\n  \"142\": \"dowitcher\",\n  \"143\": \"oystercatcher, oyster catcher\",\n  \"144\": \"pelican\",\n  \"145\": \"king penguin, Aptenodytes patagonica\",\n  \"146\": \"albatross, mollymawk\",\n  \"147\": \"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus\",\n  \"148\": \"killer whale, killer, orca, grampus, sea wolf, Orcinus orca\",\n  \"149\": \"dugong, Dugong dugon\",\n  \"150\": \"sea lion\",\n  \"151\": \"Chihuahua\",\n  \"152\": \"Japanese spaniel\",\n  \"153\": \"Maltese dog, Maltese terrier, Maltese\",\n  \"154\": \"Pekinese, Pekingese, Peke\",\n  \"155\": \"Shih-Tzu\",\n  \"156\": \"Blenheim spaniel\",\n  \"157\": \"papillon\",\n  \"158\": \"toy terrier\",\n  \"159\": \"Rhodesian ridgeback\",\n  \"160\": \"Afghan hound, Afghan\",\n  \"161\": \"basset, basset hound\",\n  \"162\": \"beagle\",\n  \"163\": \"bloodhound, sleuthhound\",\n  \"164\": \"bluetick\",\n  \"165\": \"black-and-tan coonhound\",\n  \"166\": \"Walker hound, Walker foxhound\",\n  \"167\": \"English foxhound\",\n  \"168\": \"redbone\",\n  \"169\": \"borzoi, Russian wolfhound\",\n  \"170\": \"Irish wolfhound\",\n  \"171\": \"Italian greyhound\",\n  \"172\": \"whippet\",\n  \"173\": \"Ibizan hound, Ibizan Podenco\",\n  \"174\": \"Norwegian elkhound, elkhound\",\n  \"175\": \"otterhound, otter hound\",\n  \"176\": \"Saluki, gazelle hound\",\n  \"177\": \"Scottish deerhound, deerhound\",\n  \"178\": \"Weimaraner\",\n  \"179\": \"Staffordshire bullterrier, Staffordshire bull terrier\",\n  \"180\": \"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier\",\n  \"181\": \"Bedlington terrier\",\n  \"182\": \"Border terrier\",\n  \"183\": \"Kerry blue terrier\",\n  \"184\": \"Irish terrier\",\n  \"185\": \"Norfolk terrier\",\n  \"186\": \"Norwich terrier\",\n  \"187\": \"Yorkshire terrier\",\n  \"188\": \"wire-haired fox terrier\",\n  \"189\": \"Lakeland terrier\",\n  \"190\": \"Sealyham terrier, Sealyham\",\n  \"191\": \"Airedale, Airedale terrier\",\n  \"192\": \"cairn, cairn terrier\",\n  \"193\": \"Australian terrier\",\n  \"194\": \"Dandie Dinmont, Dandie Dinmont terrier\",\n  \"195\": \"Boston bull, Boston terrier\",\n  \"196\": \"miniature schnauzer\",\n  \"197\": \"giant schnauzer\",\n  \"198\": \"standard schnauzer\",\n  \"199\": \"Scotch terrier, Scottish terrier, Scottie\",\n  \"200\": \"Tibetan terrier, chrysanthemum dog\",\n  \"201\": \"silky terrier, Sydney silky\",\n  \"202\": \"soft-coated wheaten terrier\",\n  \"203\": \"West Highland white terrier\",\n  \"204\": \"Lhasa, Lhasa apso\",\n  \"205\": \"flat-coated retriever\",\n  \"206\": \"curly-coated retriever\",\n  \"207\": \"golden retriever\",\n  \"208\": \"Labrador retriever\",\n  \"209\": \"Chesapeake Bay retriever\",\n  \"210\": \"German short-haired pointer\",\n  \"211\": \"vizsla, Hungarian pointer\",\n  \"212\": \"English setter\",\n  \"213\": \"Irish setter, red setter\",\n  \"214\": \"Gordon setter\",\n  \"215\": \"Brittany spaniel\",\n  \"216\": \"clumber, clumber spaniel\",\n  \"217\": \"English springer, English springer spaniel\",\n  \"218\": \"Welsh springer spaniel\",\n  \"219\": \"cocker spaniel, English cocker spaniel, cocker\",\n  \"220\": \"Sussex spaniel\",\n  \"221\": \"Irish water spaniel\",\n  \"222\": \"kuvasz\",\n  \"223\": \"schipperke\",\n  \"224\": \"groenendael\",\n  \"225\": \"malinois\",\n  \"226\": \"briard\",\n  \"227\": \"kelpie\",\n  \"228\": \"komondor\",\n  \"229\": \"Old English sheepdog, bobtail\",\n  \"230\": \"Shetland sheepdog, Shetland sheep dog, Shetland\",\n  \"231\": \"collie\",\n  \"232\": \"Border collie\",\n  \"233\": \"Bouvier des Flandres, Bouviers des Flandres\",\n  \"234\": \"Rottweiler\",\n  \"235\": \"German shepherd, German shepherd dog, German police dog, alsatian\",\n  \"236\": \"Doberman, Doberman pinscher\",\n  \"237\": \"miniature pinscher\",\n  \"238\": \"Greater Swiss Mountain dog\",\n  \"239\": \"Bernese mountain dog\",\n  \"240\": \"Appenzeller\",\n  \"241\": \"EntleBucher\",\n  \"242\": \"boxer\",\n  \"243\": \"bull mastiff\",\n  \"244\": \"Tibetan mastiff\",\n  \"245\": \"French bulldog\",\n  \"246\": \"Great Dane\",\n  \"247\": \"Saint Bernard, St Bernard\",\n  \"248\": \"Eskimo dog, husky\",\n  \"249\": \"malamute, malemute, Alaskan malamute\",\n  \"250\": \"Siberian husky\",\n  \"251\": \"dalmatian, coach dog, carriage dog\",\n  \"252\": \"affenpinscher, monkey pinscher, monkey dog\",\n  \"253\": \"basenji\",\n  \"254\": \"pug, pug-dog\",\n  \"255\": \"Leonberg\",\n  \"256\": \"Newfoundland, Newfoundland dog\",\n  \"257\": \"Great Pyrenees\",\n  \"258\": \"Samoyed, Samoyede\",\n  \"259\": \"Pomeranian\",\n  \"260\": \"chow, chow chow\",\n  \"261\": \"keeshond\",\n  \"262\": \"Brabancon griffon\",\n  \"263\": \"Pembroke, Pembroke Welsh corgi\",\n  \"264\": \"Cardigan, Cardigan Welsh corgi\",\n  \"265\": \"toy poodle\",\n  \"266\": \"miniature poodle\",\n  \"267\": \"standard poodle\",\n  \"268\": \"Mexican hairless\",\n  \"269\": \"timber wolf, grey wolf, gray wolf, Canis lupus\",\n  \"270\": \"white wolf, Arctic wolf, Canis lupus tundrarum\",\n  \"271\": \"red wolf, maned wolf, Canis rufus, Canis niger\",\n  \"272\": \"coyote, prairie wolf, brush wolf, Canis latrans\",\n  \"273\": \"dingo, warrigal, warragal, Canis dingo\",\n  \"274\": \"dhole, Cuon alpinus\",\n  \"275\": \"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus\",\n  \"276\": \"hyena, hyaena\",\n  \"277\": \"red fox, Vulpes vulpes\",\n  \"278\": \"kit fox, Vulpes macrotis\",\n  \"279\": \"Arctic fox, white fox, Alopex lagopus\",\n  \"280\": \"grey fox, gray fox, Urocyon cinereoargenteus\",\n  \"281\": \"tabby, tabby cat\",\n  \"282\": \"tiger cat\",\n  \"283\": \"Persian cat\",\n  \"284\": \"Siamese cat, Siamese\",\n  \"285\": \"Egyptian cat\",\n  \"286\": \"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor\",\n  \"287\": \"lynx, catamount\",\n  \"288\": \"leopard, Panthera pardus\",\n  \"289\": \"snow leopard, ounce, Panthera uncia\",\n  \"290\": \"jaguar, panther, Panthera onca, Felis onca\",\n  \"291\": \"lion, king of beasts, Panthera leo\",\n  \"292\": \"tiger, Panthera tigris\",\n  \"293\": \"cheetah, chetah, Acinonyx jubatus\",\n  \"294\": \"brown bear, bruin, Ursus arctos\",\n  \"295\": \"American black bear, black bear, Ursus americanus, Euarctos americanus\",\n  \"296\": \"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus\",\n  \"297\": \"sloth bear, Melursus ursinus, Ursus ursinus\",\n  \"298\": \"mongoose\",\n  \"299\": \"meerkat, mierkat\",\n  \"300\": \"tiger beetle\",\n  \"301\": \"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle\",\n  \"302\": \"ground beetle, carabid beetle\",\n  \"303\": \"long-horned beetle, longicorn, longicorn beetle\",\n  \"304\": \"leaf beetle, chrysomelid\",\n  \"305\": \"dung beetle\",\n  \"306\": \"rhinoceros beetle\",\n  \"307\": \"weevil\",\n  \"308\": \"fly\",\n  \"309\": \"bee\",\n  \"310\": \"ant, emmet, pismire\",\n  \"311\": \"grasshopper, hopper\",\n  \"312\": \"cricket\",\n  \"313\": \"walking stick, walkingstick, stick insect\",\n  \"314\": \"cockroach, roach\",\n  \"315\": \"mantis, mantid\",\n  \"316\": \"cicada, cicala\",\n  \"317\": \"leafhopper\",\n  \"318\": \"lacewing, lacewing fly\",\n  \"319\": \"dragonfly, darning needle, devil\\\"s darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk\",\n  \"320\": \"damselfly\",\n  \"321\": \"admiral\",\n  \"322\": \"ringlet, ringlet butterfly\",\n  \"323\": \"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus\",\n  \"324\": \"cabbage butterfly\",\n  \"325\": \"sulphur butterfly, sulfur butterfly\",\n  \"326\": \"lycaenid, lycaenid butterfly\",\n  \"327\": \"starfish, sea star\",\n  \"328\": \"sea urchin\",\n  \"329\": \"sea cucumber, holothurian\",\n  \"330\": \"wood rabbit, cottontail, cottontail rabbit\",\n  \"331\": \"hare\",\n  \"332\": \"Angora, Angora rabbit\",\n  \"333\": \"hamster\",\n  \"334\": \"porcupine, hedgehog\",\n  \"335\": \"fox squirrel, eastern fox squirrel, Sciurus niger\",\n  \"336\": \"marmot\",\n  \"337\": \"beaver\",\n  \"338\": \"guinea pig, Cavia cobaya\",\n  \"339\": \"sorrel\",\n  \"340\": \"zebra\",\n  \"341\": \"hog, pig, grunter, squealer, Sus scrofa\",\n  \"342\": \"wild boar, boar, Sus scrofa\",\n  \"343\": \"warthog\",\n  \"344\": \"hippopotamus, hippo, river horse, Hippopotamus amphibius\",\n  \"345\": \"ox\",\n  \"346\": \"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis\",\n  \"347\": \"bison\",\n  \"348\": \"ram, tup\",\n  \"349\": \"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis\",\n  \"350\": \"ibex, Capra ibex\",\n  \"351\": \"hartebeest\",\n  \"352\": \"impala, Aepyceros melampus\",\n  \"353\": \"gazelle\",\n  \"354\": \"Arabian camel, dromedary, Camelus dromedarius\",\n  \"355\": \"llama\",\n  \"356\": \"weasel\",\n  \"357\": \"mink\",\n  \"358\": \"polecat, fitch, foulmart, foumart, Mustela putorius\",\n  \"359\": \"black-footed ferret, ferret, Mustela nigripes\",\n  \"360\": \"otter\",\n  \"361\": \"skunk, polecat, wood pussy\",\n  \"362\": \"badger\",\n  \"363\": \"armadillo\",\n  \"364\": \"three-toed sloth, ai, Bradypus tridactylus\",\n  \"365\": \"orangutan, orang, orangutang, Pongo pygmaeus\",\n  \"366\": \"gorilla, Gorilla gorilla\",\n  \"367\": \"chimpanzee, chimp, Pan troglodytes\",\n  \"368\": \"gibbon, Hylobates lar\",\n  \"369\": \"siamang, Hylobates syndactylus, Symphalangus syndactylus\",\n  \"370\": \"guenon, guenon monkey\",\n  \"371\": \"patas, hussar monkey, Erythrocebus patas\",\n  \"372\": \"baboon\",\n  \"373\": \"macaque\",\n  \"374\": \"langur\",\n  \"375\": \"colobus, colobus monkey\",\n  \"376\": \"proboscis monkey, Nasalis larvatus\",\n  \"377\": \"marmoset\",\n  \"378\": \"capuchin, ringtail, Cebus capucinus\",\n  \"379\": \"howler monkey, howler\",\n  \"380\": \"titi, titi monkey\",\n  \"381\": \"spider monkey, Ateles geoffroyi\",\n  \"382\": \"squirrel monkey, Saimiri sciureus\",\n  \"383\": \"Madagascar cat, ring-tailed lemur, Lemur catta\",\n  \"384\": \"indri, indris, Indri indri, Indri brevicaudatus\",\n  \"385\": \"Indian elephant, Elephas maximus\",\n  \"386\": \"African elephant, Loxodonta africana\",\n  \"387\": \"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens\",\n  \"388\": \"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca\",\n  \"389\": \"barracouta, snoek\",\n  \"390\": \"eel\",\n  \"391\": \"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch\",\n  \"392\": \"rock beauty, Holocanthus tricolor\",\n  \"393\": \"anemone fish\",\n  \"394\": \"sturgeon\",\n  \"395\": \"gar, garfish, garpike, billfish, Lepisosteus osseus\",\n  \"396\": \"lionfish\",\n  \"397\": \"puffer, pufferfish, blowfish, globefish\",\n  \"398\": \"abacus\",\n  \"399\": \"abaya\",\n  \"400\": \"academic gown, academic robe, judge's robe\",\n  \"401\": \"accordion, piano accordion, squeeze box\",\n  \"402\": \"acoustic guitar\",\n  \"403\": \"aircraft carrier, carrier, flattop, attack aircraft carrier\",\n  \"404\": \"airliner\",\n  \"405\": \"airship, dirigible\",\n  \"406\": \"altar\",\n  \"407\": \"ambulance\",\n  \"408\": \"amphibian, amphibious vehicle\",\n  \"409\": \"analog clock\",\n  \"410\": \"apiary, bee house\",\n  \"411\": \"apron\",\n  \"412\": \"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin\",\n  \"413\": \"assault rifle, assault gun\",\n  \"414\": \"backpack, back pack, knapsack, packsack, rucksack, haversack\",\n  \"415\": \"bakery, bakeshop, bakehouse\",\n  \"416\": \"balance beam, beam\",\n  \"417\": \"balloon\",\n  \"418\": \"ballpoint, ballpoint pen, ballpen, Biro\",\n  \"419\": \"Band Aid\",\n  \"420\": \"banjo\",\n  \"421\": \"bannister, banister, balustrade, balusters, handrail\",\n  \"422\": \"barbell\",\n  \"423\": \"barber chair\",\n  \"424\": \"barbershop\",\n  \"425\": \"barn\",\n  \"426\": \"barometer\",\n  \"427\": \"barrel, cask\",\n  \"428\": \"barrow, garden cart, lawn cart, wheelbarrow\",\n  \"429\": \"baseball\",\n  \"430\": \"basketball\",\n  \"431\": \"bassinet\",\n  \"432\": \"bassoon\",\n  \"433\": \"bathing cap, swimming cap\",\n  \"434\": \"bath towel\",\n  \"435\": \"bathtub, bathing tub, bath, tub\",\n  \"436\": \"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon\",\n  \"437\": \"beacon, lighthouse, beacon light, pharos\",\n  \"438\": \"beaker\",\n  \"439\": \"bearskin, busby, shako\",\n  \"440\": \"beer bottle\",\n  \"441\": \"beer glass\",\n  \"442\": \"bell cote, bell cot\",\n  \"443\": \"bib\",\n  \"444\": \"bicycle-built-for-two, tandem bicycle, tandem\",\n  \"445\": \"bikini, two-piece\",\n  \"446\": \"binder, ring-binder\",\n  \"447\": \"binoculars, field glasses, opera glasses\",\n  \"448\": \"birdhouse\",\n  \"449\": \"boathouse\",\n  \"450\": \"bobsled, bobsleigh, bob\",\n  \"451\": \"bolo tie, bolo, bola tie, bola\",\n  \"452\": \"bonnet, poke bonnet\",\n  \"453\": \"bookcase\",\n  \"454\": \"bookshop, bookstore, bookstall\",\n  \"455\": \"bottlecap\",\n  \"456\": \"bow\",\n  \"457\": \"bow tie, bow-tie, bowtie\",\n  \"458\": \"brass, memorial tablet, plaque\",\n  \"459\": \"brassiere, bra, bandeau\",\n  \"460\": \"breakwater, groin, groyne, mole, bulwark, seawall, jetty\",\n  \"461\": \"breastplate, aegis, egis\",\n  \"462\": \"broom\",\n  \"463\": \"bucket, pail\",\n  \"464\": \"buckle\",\n  \"465\": \"bulletproof vest\",\n  \"466\": \"bullet train, bullet\",\n  \"467\": \"butcher shop, meat market\",\n  \"468\": \"cab, hack, taxi, taxicab\",\n  \"469\": \"caldron, cauldron\",\n  \"470\": \"candle, taper, wax light\",\n  \"471\": \"cannon\",\n  \"472\": \"canoe\",\n  \"473\": \"can opener, tin opener\",\n  \"474\": \"cardigan\",\n  \"475\": \"car mirror\",\n  \"476\": \"carousel, carrousel, merry-go-round, roundabout, whirligig\",\n  \"477\": \"carpenter\\\"s kit, tool kit\",\n  \"478\": \"carton\",\n  \"479\": \"car wheel\",\n  \"480\": \"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM\",\n  \"481\": \"cassette\",\n  \"482\": \"cassette player\",\n  \"483\": \"castle\",\n  \"484\": \"catamaran\",\n  \"485\": \"CD player\",\n  \"486\": \"cello, violoncello\",\n  \"487\": \"cellular telephone, cellular phone, cellphone, cell, mobile phone\",\n  \"488\": \"chain\",\n  \"489\": \"chainlink fence\",\n  \"490\": \"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour\",\n  \"491\": \"chain saw, chainsaw\",\n  \"492\": \"chest\",\n  \"493\": \"chiffonier, commode\",\n  \"494\": \"chime, bell, gong\",\n  \"495\": \"china cabinet, china closet\",\n  \"496\": \"Christmas stocking\",\n  \"497\": \"church, church building\",\n  \"498\": \"cinema, movie theater, movie theatre, movie house, picture palace\",\n  \"499\": \"cleaver, meat cleaver, chopper\",\n  \"500\": \"cliff dwelling\",\n  \"501\": \"cloak\",\n  \"502\": \"clog, geta, patten, sabot\",\n  \"503\": \"cocktail shaker\",\n  \"504\": \"coffee mug\",\n  \"505\": \"coffeepot\",\n  \"506\": \"coil, spiral, volute, whorl, helix\",\n  \"507\": \"combination lock\",\n  \"508\": \"computer keyboard, keypad\",\n  \"509\": \"confectionery, confectionary, candy store\",\n  \"510\": \"container ship, containership, container vessel\",\n  \"511\": \"convertible\",\n  \"512\": \"corkscrew, bottle screw\",\n  \"513\": \"cornet, horn, trumpet, trump\",\n  \"514\": \"cowboy boot\",\n  \"515\": \"cowboy hat, ten-gallon hat\",\n  \"516\": \"cradle\",\n  \"517\": \"crane\",\n  \"518\": \"crash helmet\",\n  \"519\": \"crate\",\n  \"520\": \"crib, cot\",\n  \"521\": \"Crock Pot\",\n  \"522\": \"croquet ball\",\n  \"523\": \"crutch\",\n  \"524\": \"cuirass\",\n  \"525\": \"dam, dike, dyke\",\n  \"526\": \"desk\",\n  \"527\": \"desktop computer\",\n  \"528\": \"dial telephone, dial phone\",\n  \"529\": \"diaper, nappy, napkin\",\n  \"530\": \"digital clock\",\n  \"531\": \"digital watch\",\n  \"532\": \"dining table, board\",\n  \"533\": \"dishrag, dishcloth\",\n  \"534\": \"dishwasher, dish washer, dishwashing machine\",\n  \"535\": \"disk brake, disc brake\",\n  \"536\": \"dock, dockage, docking facility\",\n  \"537\": \"dogsled, dog sled, dog sleigh\",\n  \"538\": \"dome\",\n  \"539\": \"doormat, welcome mat\",\n  \"540\": \"drilling platform, offshore rig\",\n  \"541\": \"drum, membranophone, tympan\",\n  \"542\": \"drumstick\",\n  \"543\": \"dumbbell\",\n  \"544\": \"Dutch oven\",\n  \"545\": \"electric fan, blower\",\n  \"546\": \"electric guitar\",\n  \"547\": \"electric locomotive\",\n  \"548\": \"entertainment center\",\n  \"549\": \"envelope\",\n  \"550\": \"espresso maker\",\n  \"551\": \"face powder\",\n  \"552\": \"feather boa, boa\",\n  \"553\": \"file, file cabinet, filing cabinet\",\n  \"554\": \"fireboat\",\n  \"555\": \"fire engine, fire truck\",\n  \"556\": \"fire screen, fireguard\",\n  \"557\": \"flagpole, flagstaff\",\n  \"558\": \"flute, transverse flute\",\n  \"559\": \"folding chair\",\n  \"560\": \"football helmet\",\n  \"561\": \"forklift\",\n  \"562\": \"fountain\",\n  \"563\": \"fountain pen\",\n  \"564\": \"four-poster\",\n  \"565\": \"freight car\",\n  \"566\": \"French horn, horn\",\n  \"567\": \"frying pan, frypan, skillet\",\n  \"568\": \"fur coat\",\n  \"569\": \"garbage truck, dustcart\",\n  \"570\": \"gasmask, respirator, gas helmet\",\n  \"571\": \"gas pump, gasoline pump, petrol pump, island dispenser\",\n  \"572\": \"goblet\",\n  \"573\": \"go-kart\",\n  \"574\": \"golf ball\",\n  \"575\": \"golfcart, golf cart\",\n  \"576\": \"gondola\",\n  \"577\": \"gong, tam-tam\",\n  \"578\": \"gown\",\n  \"579\": \"grand piano, grand\",\n  \"580\": \"greenhouse, nursery, glasshouse\",\n  \"581\": \"grille, radiator grille\",\n  \"582\": \"grocery store, grocery, food market, market\",\n  \"583\": \"guillotine\",\n  \"584\": \"hair slide\",\n  \"585\": \"hair spray\",\n  \"586\": \"half track\",\n  \"587\": \"hammer\",\n  \"588\": \"hamper\",\n  \"589\": \"hand blower, blow dryer, blow drier, hair dryer, hair drier\",\n  \"590\": \"hand-held computer, hand-held microcomputer\",\n  \"591\": \"handkerchief, hankie, hanky, hankey\",\n  \"592\": \"hard disc, hard disk, fixed disk\",\n  \"593\": \"harmonica, mouth organ, harp, mouth harp\",\n  \"594\": \"harp\",\n  \"595\": \"harvester, reaper\",\n  \"596\": \"hatchet\",\n  \"597\": \"holster\",\n  \"598\": \"home theater, home theatre\",\n  \"599\": \"honeycomb\",\n  \"600\": \"hook, claw\",\n  \"601\": \"hoopskirt, crinoline\",\n  \"602\": \"horizontal bar, high bar\",\n  \"603\": \"horse cart, horse-cart\",\n  \"604\": \"hourglass\",\n  \"605\": \"iPod\",\n  \"606\": \"iron, smoothing iron\",\n  \"607\": \"jack-o' ,-lantern\",\n  \"608\": \"jean, blue jean, denim\",\n  \"609\": \"jeep, landrover\",\n  \"610\": \"jersey, T-shirt, tee shirt\",\n  \"611\": \"jigsaw puzzle\",\n  \"612\": \"jinrikisha, ricksha, rickshaw\",\n  \"613\": \"joystick\",\n  \"614\": \"kimono\",\n  \"615\": \"knee pad\",\n  \"616\": \"knot\",\n  \"617\": \"lab coat, laboratory coat\",\n  \"618\": \"ladle\",\n  \"619\": \"lampshade, lamp shade\",\n  \"620\": \"laptop, laptop computer\",\n  \"621\": \"lawn mower, mower\",\n  \"622\": \"lens cap, lens cover\",\n  \"623\": \"letter opener, paper knife, paperknife\",\n  \"624\": \"library\",\n  \"625\": \"lifeboat\",\n  \"626\": \"lighter, light, igniter, ignitor\",\n  \"627\": \"limousine, limo\",\n  \"628\": \"liner, ocean liner\",\n  \"629\": \"lipstick, lip rouge\",\n  \"630\": \"Loafer\",\n  \"631\": \"lotion\",\n  \"632\": \"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system\",\n  \"633\": \"loupe, jeweler\\\"s loupe\",\n  \"634\": \"lumbermill, sawmill\",\n  \"635\": \"magnetic compass\",\n  \"636\": \"mailbag, postbag\",\n  \"637\": \"mailbox, letter box\",\n  \"638\": \"maillot\",\n  \"639\": \"maillot, tank suit\",\n  \"640\": \"manhole cover\",\n  \"641\": \"maraca\",\n  \"642\": \"marimba, xylophone\",\n  \"643\": \"mask\",\n  \"644\": \"matchstick\",\n  \"645\": \"maypole\",\n  \"646\": \"maze, labyrinth\",\n  \"647\": \"measuring cup\",\n  \"648\": \"medicine chest, medicine cabinet\",\n  \"649\": \"megalith, megalithic structure\",\n  \"650\": \"microphone, mike\",\n  \"651\": \"microwave, microwave oven\",\n  \"652\": \"military uniform\",\n  \"653\": \"milk can\",\n  \"654\": \"minibus\",\n  \"655\": \"miniskirt, mini\",\n  \"656\": \"minivan\",\n  \"657\": \"missile\",\n  \"658\": \"mitten\",\n  \"659\": \"mixing bowl\",\n  \"660\": \"mobile home, manufactured home\",\n  \"661\": \"Model T\",\n  \"662\": \"modem\",\n  \"663\": \"monastery\",\n  \"664\": \"monitor\",\n  \"665\": \"moped\",\n  \"666\": \"mortar\",\n  \"667\": \"mortarboard\",\n  \"668\": \"mosque\",\n  \"669\": \"mosquito net\",\n  \"670\": \"motor scooter, scooter\",\n  \"671\": \"mountain bike, all-terrain bike, off-roader\",\n  \"672\": \"mountain tent\",\n  \"673\": \"mouse, computer mouse\",\n  \"674\": \"mousetrap\",\n  \"675\": \"moving van\",\n  \"676\": \"muzzle\",\n  \"677\": \"nail\",\n  \"678\": \"neck brace\",\n  \"679\": \"necklace\",\n  \"680\": \"nipple\",\n  \"681\": \"notebook, notebook computer\",\n  \"682\": \"obelisk\",\n  \"683\": \"oboe, hautboy, hautbois\",\n  \"684\": \"ocarina, sweet potato\",\n  \"685\": \"odometer, hodometer, mileometer, milometer\",\n  \"686\": \"oil filter\",\n  \"687\": \"organ, pipe organ\",\n  \"688\": \"oscilloscope, scope, cathode-ray oscilloscope, CRO\",\n  \"689\": \"overskirt\",\n  \"690\": \"oxcart\",\n  \"691\": \"oxygen mask\",\n  \"692\": \"packet\",\n  \"693\": \"paddle, boat paddle\",\n  \"694\": \"paddlewheel, paddle wheel\",\n  \"695\": \"padlock\",\n  \"696\": \"paintbrush\",\n  \"697\": \"pajama, pyjama, pj's, jammies\",\n  \"698\": \"palace\",\n  \"699\": \"panpipe, pandean pipe, syrinx\",\n  \"700\": \"paper towel\",\n  \"701\": \"parachute, chute\",\n  \"702\": \"parallel bars, bars\",\n  \"703\": \"park bench\",\n  \"704\": \"parking meter\",\n  \"705\": \"passenger car, coach, carriage\",\n  \"706\": \"patio, terrace\",\n  \"707\": \"pay-phone, pay-station\",\n  \"708\": \"pedestal, plinth, footstall\",\n  \"709\": \"pencil box, pencil case\",\n  \"710\": \"pencil sharpener\",\n  \"711\": \"perfume, essence\",\n  \"712\": \"Petri dish\",\n  \"713\": \"photocopier\",\n  \"714\": \"pick, plectrum, plectron\",\n  \"715\": \"pickelhaube\",\n  \"716\": \"picket fence, paling\",\n  \"717\": \"pickup, pickup truck\",\n  \"718\": \"pier\",\n  \"719\": \"piggy bank, penny bank\",\n  \"720\": \"pill bottle\",\n  \"721\": \"pillow\",\n  \"722\": \"ping-pong ball\",\n  \"723\": \"pinwheel\",\n  \"724\": \"pirate, pirate ship\",\n  \"725\": \"pitcher, ewer\",\n  \"726\": \"plane, carpenter\\\"s plane, woodworking plane\",\n  \"727\": \"planetarium\",\n  \"728\": \"plastic bag\",\n  \"729\": \"plate rack\",\n  \"730\": \"plow, plough\",\n  \"731\": \"plunger, plumber's helper\",\n  \"732\": \"Polaroid camera, Polaroid Land camera\",\n  \"733\": \"pole\",\n  \"734\": \"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria\",\n  \"735\": \"poncho\",\n  \"736\": \"pool table, billiard table, snooker table\",\n  \"737\": \"pop bottle, soda bottle\",\n  \"738\": \"pot, flowerpot\",\n  \"739\": \"potter's wheel\",\n  \"740\": \"power drill\",\n  \"741\": \"prayer rug, prayer mat\",\n  \"742\": \"printer\",\n  \"743\": \"prison, prison house\",\n  \"744\": \"projectile, missile\",\n  \"745\": \"projector\",\n  \"746\": \"puck, hockey puck\",\n  \"747\": \"punching bag, punch bag, punching ball, punchball\",\n  \"748\": \"purse\",\n  \"749\": \"quill, quill pen\",\n  \"750\": \"quilt, comforter, comfort, puff\",\n  \"751\": \"racer, race car, racing car\",\n  \"752\": \"racket, racquet\",\n  \"753\": \"radiator\",\n  \"754\": \"radio, wireless\",\n  \"755\": \"radio telescope, radio reflector\",\n  \"756\": \"rain barrel\",\n  \"757\": \"recreational vehicle, RV, R.V.\",\n  \"758\": \"reel\",\n  \"759\": \"reflex camera\",\n  \"760\": \"refrigerator, icebox\",\n  \"761\": \"remote control, remote\",\n  \"762\": \"restaurant, eating house, eating place, eatery\",\n  \"763\": \"revolver, six-gun, six-shooter\",\n  \"764\": \"rifle\",\n  \"765\": \"rocking chair, rocker\",\n  \"766\": \"rotisserie\",\n  \"767\": \"rubber eraser, rubber, pencil eraser\",\n  \"768\": \"rugby ball\",\n  \"769\": \"rule, ruler\",\n  \"770\": \"running shoe\",\n  \"771\": \"safe\",\n  \"772\": \"safety pin\",\n  \"773\": \"saltshaker, salt shaker\",\n  \"774\": \"sandal\",\n  \"775\": \"sarong\",\n  \"776\": \"sax, saxophone\",\n  \"777\": \"scabbard\",\n  \"778\": \"scale, weighing machine\",\n  \"779\": \"school bus\",\n  \"780\": \"schooner\",\n  \"781\": \"scoreboard\",\n  \"782\": \"screen, CRT screen\",\n  \"783\": \"screw\",\n  \"784\": \"screwdriver\",\n  \"785\": \"seat belt, seatbelt\",\n  \"786\": \"sewing machine\",\n  \"787\": \"shield, buckler\",\n  \"788\": \"shoe shop, shoe-shop, shoe store\",\n  \"789\": \"shoji\",\n  \"790\": \"shopping basket\",\n  \"791\": \"shopping cart\",\n  \"792\": \"shovel\",\n  \"793\": \"shower cap\",\n  \"794\": \"shower curtain\",\n  \"795\": \"ski\",\n  \"796\": \"ski mask\",\n  \"797\": \"sleeping bag\",\n  \"798\": \"slide rule, slipstick\",\n  \"799\": \"sliding door\",\n  \"800\": \"slot, one-armed bandit\",\n  \"801\": \"snorkel\",\n  \"802\": \"snowmobile\",\n  \"803\": \"snowplow, snowplough\",\n  \"804\": \"soap dispenser\",\n  \"805\": \"soccer ball\",\n  \"806\": \"sock\",\n  \"807\": \"solar dish, solar collector, solar furnace\",\n  \"808\": \"sombrero\",\n  \"809\": \"soup bowl\",\n  \"810\": \"space bar\",\n  \"811\": \"space heater\",\n  \"812\": \"space shuttle\",\n  \"813\": \"spatula\",\n  \"814\": \"speedboat\",\n  \"815\": \"spider web, spider's web\",\n  \"816\": \"spindle\",\n  \"817\": \"sports car, sport car\",\n  \"818\": \"spotlight, spot\",\n  \"819\": \"stage\",\n  \"820\": \"steam locomotive\",\n  \"821\": \"steel arch bridge\",\n  \"822\": \"steel drum\",\n  \"823\": \"stethoscope\",\n  \"824\": \"stole\",\n  \"825\": \"stone wall\",\n  \"826\": \"stopwatch, stop watch\",\n  \"827\": \"stove\",\n  \"828\": \"strainer\",\n  \"829\": \"streetcar, tram, tramcar, trolley, trolley car\",\n  \"830\": \"stretcher\",\n  \"831\": \"studio couch, day bed\",\n  \"832\": \"stupa, tope\",\n  \"833\": \"submarine, pigboat, sub, U-boat\",\n  \"834\": \"suit, suit of clothes\",\n  \"835\": \"sundial\",\n  \"836\": \"sunglass\",\n  \"837\": \"sunglasses, dark glasses, shades\",\n  \"838\": \"sunscreen, sunblock, sun blocker\",\n  \"839\": \"suspension bridge\",\n  \"840\": \"swab, swob, mop\",\n  \"841\": \"sweatshirt\",\n  \"842\": \"swimming trunks, bathing trunks\",\n  \"843\": \"swing\",\n  \"844\": \"switch, electric switch, electrical switch\",\n  \"845\": \"syringe\",\n  \"846\": \"table lamp\",\n  \"847\": \"tank, army tank, armored combat vehicle, armoured combat vehicle\",\n  \"848\": \"tape player\",\n  \"849\": \"teapot\",\n  \"850\": \"teddy, teddy bear\",\n  \"851\": \"television, television system\",\n  \"852\": \"tennis ball\",\n  \"853\": \"thatch, thatched roof\",\n  \"854\": \"theater curtain, theatre curtain\",\n  \"855\": \"thimble\",\n  \"856\": \"thresher, thrasher, threshing machine\",\n  \"857\": \"throne\",\n  \"858\": \"tile roof\",\n  \"859\": \"toaster\",\n  \"860\": \"tobacco shop, tobacconist shop, tobacconist\",\n  \"861\": \"toilet seat\",\n  \"862\": \"torch\",\n  \"863\": \"totem pole\",\n  \"864\": \"tow truck, tow car, wrecker\",\n  \"865\": \"toyshop\",\n  \"866\": \"tractor\",\n  \"867\": \"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi\",\n  \"868\": \"tray\",\n  \"869\": \"trench coat\",\n  \"870\": \"tricycle, trike, velocipede\",\n  \"871\": \"trimaran\",\n  \"872\": \"tripod\",\n  \"873\": \"triumphal arch\",\n  \"874\": \"trolleybus, trolley coach, trackless trolley\",\n  \"875\": \"trombone\",\n  \"876\": \"tub, vat\",\n  \"877\": \"turnstile\",\n  \"878\": \"typewriter keyboard\",\n  \"879\": \"umbrella\",\n  \"880\": \"unicycle, monocycle\",\n  \"881\": \"upright, upright piano\",\n  \"882\": \"vacuum, vacuum cleaner\",\n  \"883\": \"vase\",\n  \"884\": \"vault\",\n  \"885\": \"velvet\",\n  \"886\": \"vending machine\",\n  \"887\": \"vestment\",\n  \"888\": \"viaduct\",\n  \"889\": \"violin, fiddle\",\n  \"890\": \"volleyball\",\n  \"891\": \"waffle iron\",\n  \"892\": \"wall clock\",\n  \"893\": \"wallet, billfold, notecase, pocketbook\",\n  \"894\": \"wardrobe, closet, press\",\n  \"895\": \"warplane, military plane\",\n  \"896\": \"washbasin, handbasin, washbowl, lavabo, wash-hand basin\",\n  \"897\": \"washer, automatic washer, washing machine\",\n  \"898\": \"water bottle\",\n  \"899\": \"water jug\",\n  \"900\": \"water tower\",\n  \"901\": \"whiskey jug\",\n  \"902\": \"whistle\",\n  \"903\": \"wig\",\n  \"904\": \"window screen\",\n  \"905\": \"window shade\",\n  \"906\": \"Windsor tie\",\n  \"907\": \"wine bottle\",\n  \"908\": \"wing\",\n  \"909\": \"wok\",\n  \"910\": \"wooden spoon\",\n  \"911\": \"wool, woolen, woollen\",\n  \"912\": \"worm fence, snake fence, snake-rail fence, Virginia fence\",\n  \"913\": \"wreck\",\n  \"914\": \"yawl\",\n  \"915\": \"yurt\",\n  \"916\": \"web site, website, internet site, site\",\n  \"917\": \"comic book\",\n  \"918\": \"crossword puzzle, crossword\",\n  \"919\": \"street sign\",\n  \"920\": \"traffic light, traffic signal, stoplight\",\n  \"921\": \"book jacket, dust cover, dust jacket, dust wrapper\",\n  \"922\": \"menu\",\n  \"923\": \"plate\",\n  \"924\": \"guacamole\",\n  \"925\": \"consomme\",\n  \"926\": \"hot pot, hotpot\",\n  \"927\": \"trifle\",\n  \"928\": \"ice cream, icecream\",\n  \"929\": \"ice lolly, lolly, lollipop, popsicle\",\n  \"930\": \"French loaf\",\n  \"931\": \"bagel, beigel\",\n  \"932\": \"pretzel\",\n  \"933\": \"cheeseburger\",\n  \"934\": \"hotdog, hot dog, red hot\",\n  \"935\": \"mashed potato\",\n  \"936\": \"head cabbage\",\n  \"937\": \"broccoli\",\n  \"938\": \"cauliflower\",\n  \"939\": \"zucchini, courgette\",\n  \"940\": \"spaghetti squash\",\n  \"941\": \"acorn squash\",\n  \"942\": \"butternut squash\",\n  \"943\": \"cucumber, cuke\",\n  \"944\": \"artichoke, globe artichoke\",\n  \"945\": \"bell pepper\",\n  \"946\": \"cardoon\",\n  \"947\": \"mushroom\",\n  \"948\": \"Granny Smith\",\n  \"949\": \"strawberry\",\n  \"950\": \"orange\",\n  \"951\": \"lemon\",\n  \"952\": \"fig\",\n  \"953\": \"pineapple, ananas\",\n  \"954\": \"banana\",\n  \"955\": \"jackfruit, jak, jack\",\n  \"956\": \"custard apple\",\n  \"957\": \"pomegranate\",\n  \"958\": \"hay\",\n  \"959\": \"carbonara\",\n  \"960\": \"chocolate sauce, chocolate syrup\",\n  \"961\": \"dough\",\n  \"962\": \"meat loaf, meatloaf\",\n  \"963\": \"pizza, pizza pie\",\n  \"964\": \"potpie\",\n  \"965\": \"burrito\",\n  \"966\": \"red wine\",\n  \"967\": \"espresso\",\n  \"968\": \"cup\",\n  \"969\": \"eggnog\",\n  \"970\": \"alp\",\n  \"971\": \"bubble\",\n  \"972\": \"cliff, drop, drop-off\",\n  \"973\": \"coral reef\",\n  \"974\": \"geyser\",\n  \"975\": \"lakeside, lakeshore\",\n  \"976\": \"promontory, headland, head, foreland\",\n  \"977\": \"sandbar, sand bar\",\n  \"978\": \"seashore, coast, seacoast, sea-coast\",\n  \"979\": \"valley, vale\",\n  \"980\": \"volcano\",\n  \"981\": \"ballplayer, baseball player\",\n  \"982\": \"groom, bridegroom\",\n  \"983\": \"scuba diver\",\n  \"984\": \"rapeseed\",\n  \"985\": \"daisy\",\n  \"986\": \"yellow lady\\\"s slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum\",\n  \"987\": \"corn\",\n  \"988\": \"acorn\",\n  \"989\": \"hip, rose hip, rosehip\",\n  \"990\": \"buckeye, horse chestnut, conker\",\n  \"991\": \"coral fungus\",\n  \"992\": \"agaric\",\n  \"993\": \"gyromitra\",\n  \"994\": \"stinkhorn, carrion fungus\",\n  \"995\": \"earthstar\",\n  \"996\": \"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa\",\n  \"997\": \"bolete\",\n  \"998\": \"ear, spike, capitulum\",\n  \"999\": \"toilet tissue, toilet paper, bathroom tissue\"\n}\n";


/***/ }),

/***/ "./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/tensor-hub-model-loader.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/tensor-hub-model-loader.ts ***!
  \************************************************************************************************************/
/*! exports provided: TensorHubModelLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TensorHubModelLoader", function() { return TensorHubModelLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_cnn_model_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/cnn-model-loader */ "./src/utils/cnn-model-loader.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _image_net_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-net-class-names */ "./src/app/background-page/classifier-manager/cnn-loaders/tensorhub-loader/image-net-class-names.ts");





var TensorHubModelLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TensorHubModelLoader, _super);
    function TensorHubModelLoader(notificaton) {
        var _a;
        var _this = _super.call(this, notificaton) || this;
        _this.datasets = (_a = {},
            _a["imagenet-ilsvrc-2012-cls"] = JSON.parse(_image_net_class_names__WEBPACK_IMPORTED_MODULE_4__["IMAGE_NET_CLASSES"]),
            _a);
        _this.cnnModelUrl = notificaton.cnnModelHub.url;
        _this.dataset = notificaton.cnnModelHub.dataset;
        return _this;
    }
    TensorHubModelLoader.prototype.getSettings = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var classNames, settings;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                classNames = this.datasets[this.dataset];
                if (!classNames) {
                    return [2 /*return*/, Promise.reject("not support current dataset " + this.dataset)];
                }
                settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.notification), { classNames: classNames, cnnModelHub: this.notification.cnnModelHub, type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].TensorFlowHubModelNotification });
                return [2 /*return*/, Promise.resolve(settings)];
            });
        });
    };
    TensorHubModelLoader.prototype.getCnnModel = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var startTime, cnnModel;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Loading model...");
                        startTime = performance.now();
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadGraphModel"](this.cnnModelUrl, { fromTFHub: true })];
                    case 1:
                        cnnModel = _a.sent();
                        console.log("Model loaded  in " + Math.floor(performance.now() - startTime) + " ms...");
                        return [2 /*return*/, cnnModel];
                }
            });
        });
    };
    return TensorHubModelLoader;
}(_utils_cnn_model_loader__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/app/background-page/convolutional-neural-network/convolutional-neural-network.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/background-page/convolutional-neural-network/convolutional-neural-network.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConvolutionalNeuralNetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolutionalNeuralNetwork", function() { return ConvolutionalNeuralNetwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/module */ "./src/utils/module.ts");




var ConvolutionalNeuralNetwork = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConvolutionalNeuralNetwork, _super);
    function ConvolutionalNeuralNetwork() {
        var _a;
        var _this = _super.call(this) || this;
        _this.predict = (_a = {}, _a[0] = "not show", _a[1] = "show", _a);
        return _this;
    }
    ConvolutionalNeuralNetwork.prototype.error = function (e) {
    };
    ConvolutionalNeuralNetwork.prototype.complete = function () {
    };
    ConvolutionalNeuralNetwork.prototype.next = function (message) {
        if (message.type === _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ImageNotification) {
            return this.imageNotification(message);
        }
        if (message.type === _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].CnnModelSettingNotification) {
            return this.settingsNotification(message);
        }
    };
    ConvolutionalNeuralNetwork.prototype.imageNotification = function (message) {
        var _this = this;
        var outputMessage = {
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].FilterNotification,
            id: message.id,
            predict: this.predict[1],
            imgSrc: message.img.src
        };
        if (this.dontNeedToPredict()) {
            this.subject.next(outputMessage);
            return;
        }
        this.startToPredict(message.img)
            .then(function (pred) {
            console.log("CNN pred:", pred);
            outputMessage.predict = pred;
            _this.subject.next(outputMessage);
        });
    };
    ConvolutionalNeuralNetwork.prototype.dontNeedToPredict = function () {
        if (!this.model) {
            return true;
        }
        return this.enables.reduce((function (previousValue, currentValue) { return previousValue && currentValue; }));
    };
    ConvolutionalNeuralNetwork.prototype.settingsNotification = function (message) {
        if (message.cnnModel) {
            this.model = message.cnnModel;
        }
        if (message.classNames) {
            this.classNames = message.classNames;
        }
        if (message.enables) {
            this.enables = message.enables;
        }
    };
    ConvolutionalNeuralNetwork.prototype.getTheBestClass = function (logIts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var indices, argMax, pred;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indices = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["topk"](logIts, 1, true).indices;
                        return [4 /*yield*/, indices.data()];
                    case 1:
                        argMax = _a.sent();
                        console.log(this.classNames[argMax[0]]);
                        pred = this.enables[argMax[0]] ? 1 : 0;
                        return [2 /*return*/, this.predict[pred]];
                }
            });
        });
    };
    ConvolutionalNeuralNetwork.prototype.startToPredict = function (image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var logIts;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            try {
                                logIts = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](this.tinyFunction.bind(this, image));
                                resolve(this.getTheBestClass(logIts));
                            }
                            catch (e) {
                                // console.error("Unable to execute tinyFunction", e)
                                reject(e);
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ConvolutionalNeuralNetwork.prototype.tinyFunction = function (img) {
        var shape = this.acceptableInputShape(this.model.inputs[0].shape);
        var image = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["browser"].fromPixels(img).toFloat().resizeBilinear([shape[1], shape[2]]);
        var normalized = image.div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](255.0));
        var batched = normalized.reshape(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([1], shape.slice(1, shape.length)));
        return this.model.predict(batched);
    };
    /*
 por algum motivo alguns modelos do tensorHub possuem um input shape incoerente como: [-1,0,0,3],
 mas sabe-se que a priori todos os modelos do tensorHub  tem o mesmo input shape que é [1, 224, 224, 3]
  */
    ConvolutionalNeuralNetwork.prototype.acceptableInputShape = function (inputShape) {
        var defaultShapeFromTensorHub = [1, 224, 224, 3];
        if (inputShape === undefined) {
            return defaultShapeFromTensorHub;
        }
        if (inputShape.length !== 4) {
            return defaultShapeFromTensorHub;
        }
        if (inputShape[1] <= 0 || inputShape[2] <= 0) {
            return defaultShapeFromTensorHub;
        }
        return inputShape;
    };
    return ConvolutionalNeuralNetwork;
}(_utils_module__WEBPACK_IMPORTED_MODULE_3__["default"]));



/***/ }),

/***/ "./src/app/background-page/load-image/load-image.ts":
/*!**********************************************************!*\
  !*** ./src/app/background-page/load-image/load-image.ts ***!
  \**********************************************************/
/*! exports provided: LoadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadImage", function() { return LoadImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/module */ "./src/utils/module.ts");



var LoadImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoadImage, _super);
    function LoadImage() {
        var _a;
        var _this = _super.call(this) || this;
        _this.shape = { min: 40 };
        _this.tabs = {};
        _this.callbacks = (_a = {},
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ImageSourceNotification] = _this.imageSourceNotification.bind(_this),
            _a);
        return _this;
    }
    LoadImage.prototype.error = function (e) {
    };
    LoadImage.prototype.complete = function () {
    };
    LoadImage.prototype.next = function (notification) {
        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification);
        }
    };
    LoadImage.prototype.imageSourceNotification = function (notification) {
        if (notification.id === undefined) {
            throw LoadImage.noTabError;
        }
        var img = this.createDomElement(notification.message);
        this.linkSourceToTab(img.src, notification.id);
    };
    LoadImage.prototype.createDomElement = function (src) {
        if (!src) {
            return undefined;
        }
        var img = document.createElement("img");
        img.addEventListener("error", this.onError.bind(this));
        img.addEventListener("load", this.onLoad.bind(this));
        img.src = src;
        return img;
    };
    LoadImage.prototype.linkSourceToTab = function (src, tabUUID) {
        this.tabs[src] = tabUUID;
    };
    LoadImage.prototype.onError = function (event) {
        delete this.tabs[event.target.src];
    };
    LoadImage.prototype.onLoad = function (event) {
        var imgTarget = event.target;
        if ((imgTarget.height && imgTarget.height >= this.shape.min) || (imgTarget.width && imgTarget.width >= this.shape.min)) {
            this.notify(imgTarget);
            return;
        }
    };
    LoadImage.prototype.getTabFromSource = function (src) {
        var tab = this.tabs[src];
        if (!tab) {
            throw Error("Tab Not found");
        }
        return this.tabs[src];
    };
    LoadImage.prototype.notify = function (img) {
        var id = this.getTabFromSource(img.src);
        this.subject.next({ type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ImageNotification, id: id, img: img });
        delete this.tabs[img.src];
    };
    LoadImage.noTabError = new Error("Tab Not found");
    return LoadImage;
}(_utils_module__WEBPACK_IMPORTED_MODULE_2__["default"]));



/***/ }),

/***/ "./src/app/interfaces/notifications.ts":
/*!*********************************************!*\
  !*** ./src/app/interfaces/notifications.ts ***!
  \*********************************************/
/*! exports provided: NotificationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTypes", function() { return NotificationTypes; });
var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes[NotificationTypes["Notification"] = 0] = "Notification";
    NotificationTypes[NotificationTypes["ImageSourceNotification"] = 1] = "ImageSourceNotification";
    NotificationTypes[NotificationTypes["ClassNameUrlsNotification"] = 2] = "ClassNameUrlsNotification";
    NotificationTypes[NotificationTypes["ImageNotification"] = 3] = "ImageNotification";
    NotificationTypes[NotificationTypes["FilterNotification"] = 4] = "FilterNotification";
    NotificationTypes[NotificationTypes["ContentNotification"] = 5] = "ContentNotification";
    NotificationTypes[NotificationTypes["CnnModelSettingNotification"] = 6] = "CnnModelSettingNotification";
    NotificationTypes[NotificationTypes["TensorFlowHubModelNotification"] = 7] = "TensorFlowHubModelNotification";
    NotificationTypes[NotificationTypes["InputShapeNotification"] = 8] = "InputShapeNotification";
    NotificationTypes[NotificationTypes["LocalModelInputNotification"] = 9] = "LocalModelInputNotification";
})(NotificationTypes || (NotificationTypes = {}));


/***/ }),

/***/ "./src/app/navbar/nav-bar.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navbar/nav-bar.component.ts ***!
  \*********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 12, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "fixed-top", "rounded-bottom", 2, "position", "sticky"], ["routerLink", "", 1, "navbar-brand"], ["id", "logo", "src", "assets/app-component/deep-learning-light.png", "width", "75", "height", "45", "alt", "", 1, "d-inline-block", "align-top"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [2, "width", "50%"], ["routerLink", "filters", 1, "nav-link"], ["routerLink", "models", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " An chrome Extension ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Filters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Models");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["a.nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n\na.navbar-brand[_ngcontent-%COMP%]{\n  margin: 0;\n}\n\ndiv.nav-item[_ngcontent-%COMP%] {\n  display: inherit;\n  margin: 0 !important;\n  text-align: center;\n  width: 100%;\n}\n\ndiv.navbar-nav.mr-auto[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n  text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5hLm5hdmJhci1icmFuZHtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbmRpdi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYubmF2YmFyLW5hdi5tci1hdXRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbiJdfQ== */"] });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/browser-user-interface/browser-user-interface.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/browser-user-interface/browser-user-interface.service.ts ***!
  \***********************************************************************************/
/*! exports provided: BrowserUserInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserUserInterfaceService", function() { return BrowserUserInterfaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _chrome_browser_chrome_user_interface_communication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrome-browser/chrome-user-interface-communication */ "./src/app/services/browser-user-interface/chrome-browser/chrome-user-interface-communication.ts");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/module */ "./src/utils/module.ts");






var BrowserUserInterfaceService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserUserInterfaceService, _super);
    function BrowserUserInterfaceService() {
        var _a;
        var _this = _super.call(this) || this;
        _this.callbacks = (_a = {},
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].TensorFlowHubModelNotification] = _this.browserNotification.bind(_this),
            _a);
        console.log("create User Interface Communication");
        _this.browser = BrowserUserInterfaceService.selectBrowserUserInterfaceCommunication();
        _this.addObserver(_this.browser);
        _this.browser.tryToStart();
        return _this;
    }
    BrowserUserInterfaceService.selectBrowserUserInterfaceCommunication = function () {
        if (chrome) {
            return new _chrome_browser_chrome_user_interface_communication__WEBPACK_IMPORTED_MODULE_3__["ChromeUserInterfaceCommunication"]();
        }
        else {
            throw new Error("Not implemented");
        }
    };
    BrowserUserInterfaceService.prototype.selectTensorHubModel = function (cnnModel) {
        var newNotification = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentCnnModelSettings), { cnnModelHub: cnnModel });
        this.browser.sendNotification(newNotification);
    };
    BrowserUserInterfaceService.prototype.selectLocalModel = function (url) {
        var notification = { type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].LocalModelInputNotification, message: url };
        this.browser.sendNotification(notification);
    };
    BrowserUserInterfaceService.prototype.changeFilterStatus = function (index) {
        var newNotification = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentCnnModelSettings);
        newNotification.enables[index] = !newNotification.enables[index];
        this.browser.sendNotification(newNotification);
    };
    BrowserUserInterfaceService.prototype.next = function (notification) {
        console.log(this.callbacks);
        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification);
        }
    };
    BrowserUserInterfaceService.prototype.error = function (e) {
    };
    BrowserUserInterfaceService.prototype.complete = function () {
    };
    BrowserUserInterfaceService.prototype.addCnnModelSettingsObserver = function (observer) {
        this.subject.subscribe(observer);
        this.notifyAll();
    };
    BrowserUserInterfaceService.prototype.browserNotification = function (notification) {
        console.log("browser user interface browserNotification: ", notification);
        this.currentCnnModelSettings = notification;
        this.notifyAll();
    };
    BrowserUserInterfaceService.prototype.notifyAll = function () {
        console.log("call User interface notifyAll", this.currentCnnModelSettings);
        if (this.currentCnnModelSettings) {
            this.subject.next(this.currentCnnModelSettings);
        }
        else {
            this.browser.getCnnModelSettingsFromBackground();
        }
    };
    BrowserUserInterfaceService.ɵfac = function BrowserUserInterfaceService_Factory(t) { return new (t || BrowserUserInterfaceService)(); };
    BrowserUserInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowserUserInterfaceService, factory: BrowserUserInterfaceService.ɵfac, providedIn: "root" });
    return BrowserUserInterfaceService;
}(_utils_module__WEBPACK_IMPORTED_MODULE_4__["default"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserUserInterfaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/browser-user-interface/chrome-browser/chrome-user-interface-communication.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/services/browser-user-interface/chrome-browser/chrome-user-interface-communication.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ChromeUserInterfaceCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeUserInterfaceCommunication", function() { return ChromeUserInterfaceCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/user-interface-communication */ "./src/utils/user-interface-communication.ts");
/* harmony import */ var _background_page_background_communication_chrome_browser_chrome_background_communication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../background-page/background-communication/chrome-browser/chrome-background-communication */ "./src/app/background-page/background-communication/chrome-browser/chrome-background-communication.ts");




var ChromeUserInterfaceCommunication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChromeUserInterfaceCommunication, _super);
    function ChromeUserInterfaceCommunication() {
        return _super.call(this) || this;
    }
    ChromeUserInterfaceCommunication.prototype.checkPermissions = function () {
        if (!chrome.extension || !chrome.runtime) {
            throw Error("Unable to connect to background-page script");
        }
    };
    ChromeUserInterfaceCommunication.prototype.complete = function () {
    };
    ChromeUserInterfaceCommunication.prototype.error = function (e) {
    };
    ChromeUserInterfaceCommunication.prototype.next = function (notification) {
    };
    ChromeUserInterfaceCommunication.prototype.tryToStart = function () {
        this.checkPermissions();
        chrome.runtime.onMessage.addListener(this.listener.bind(this));
        this.port = chrome.runtime.connect({ name: _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_2__["USER_INTERFACE_COMMUNICATION_ID"] });
        this.port.onMessage.addListener(this.listener.bind(this));
    };
    ChromeUserInterfaceCommunication.prototype.sendNotification = function (tensorflowHubModel) {
        this.port.postMessage(tensorflowHubModel);
    };
    ChromeUserInterfaceCommunication.prototype.listener = function (message) {
        this.subject.next(message);
    };
    ChromeUserInterfaceCommunication.prototype.getCnnModelSettingsFromBackground = function () {
        this.port.postMessage({
            message: _background_page_background_communication_chrome_browser_chrome_background_communication__WEBPACK_IMPORTED_MODULE_3__["GET_CURRENT_SETTINGS_MESSAGE"],
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].Notification
        });
    };
    return ChromeUserInterfaceCommunication;
}(_utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_2__["UserInterfaceCommunication"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/utils/browser-communication.ts":
/*!********************************************!*\
  !*** ./src/utils/browser-communication.ts ***!
  \********************************************/
/*! exports provided: BrowserCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserCommunication", function() { return BrowserCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ "./src/utils/module.ts");


var BrowserCommunication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserCommunication, _super);
    function BrowserCommunication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BrowserCommunication;
}(_module__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/utils/cnn-model-loader.ts":
/*!***************************************!*\
  !*** ./src/utils/cnn-model-loader.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CnnModelLoader = /** @class */ (function () {
    function CnnModelLoader(notification) {
        this.notification = notification;
    }
    return CnnModelLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (CnnModelLoader);


/***/ }),

/***/ "./src/utils/module.ts":
/*!*****************************!*\
  !*** ./src/utils/module.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Module = /** @class */ (function () {
    function Module() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.observer = {
            next: this.next.bind(this),
            error: this.error.bind(this),
            complete: this.complete.bind(this),
        };
        this.subscriptions = new Array();
    }
    Module.prototype.addObserver = function (abstractModule) {
        this.subscriptions.push(abstractModule.subject.subscribe(this.observer));
    };
    Module.prototype.unsubscribe = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return Module;
}());
/* harmony default export */ __webpack_exports__["default"] = (Module);


/***/ }),

/***/ "./src/utils/user-interface-communication.ts":
/*!***************************************************!*\
  !*** ./src/utils/user-interface-communication.ts ***!
  \***************************************************/
/*! exports provided: USER_INTERFACE_COMMUNICATION_ID, UserInterfaceCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INTERFACE_COMMUNICATION_ID", function() { return USER_INTERFACE_COMMUNICATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceCommunication", function() { return UserInterfaceCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser_communication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-communication */ "./src/utils/browser-communication.ts");


var USER_INTERFACE_COMMUNICATION_ID = "UserInterfaceCommunication";
var UserInterfaceCommunication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserInterfaceCommunication, _super);
    function UserInterfaceCommunication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserInterfaceCommunication;
}(_browser_communication__WEBPACK_IMPORTED_MODULE_1__["BrowserCommunication"]));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/samuel/Documents/Repositories/public/an-chrome-extension/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map