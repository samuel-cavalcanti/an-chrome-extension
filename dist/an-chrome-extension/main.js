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
/* harmony import */ var _convolutional_neural_network_convolutional_neural_network_settings_convolutional_neural_network_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convolutional-neural-network/convolutional-neural-network-settings/convolutional-neural-network-settings */ "./src/app/background-page/convolutional-neural-network/convolutional-neural-network-settings/convolutional-neural-network-settings.ts");
/* harmony import */ var _background_communication_chrome_browser_chrome_background_communication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-communication/chrome-browser/chrome-background-communication */ "./src/app/background-page/background-communication/chrome-browser/chrome-background-communication.ts");






var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.cnnSettings = new _convolutional_neural_network_convolutional_neural_network_settings_convolutional_neural_network_settings__WEBPACK_IMPORTED_MODULE_3__["ConvolutionalNeuralNetworkSettings"]();
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

/***/ "./src/app/background-page/convolutional-neural-network/convolutional-neural-network-settings/convolutional-neural-network-settings.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/background-page/convolutional-neural-network/convolutional-neural-network-settings/convolutional-neural-network-settings.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ConvolutionalNeuralNetworkSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolutionalNeuralNetworkSettings", function() { return ConvolutionalNeuralNetworkSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/module */ "./src/utils/module.ts");
/* harmony import */ var _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/user-interface-communication */ "./src/utils/user-interface-communication.ts");






var ConvolutionalNeuralNetworkSettings = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConvolutionalNeuralNetworkSettings, _super);
    function ConvolutionalNeuralNetworkSettings() {
        var _a;
        var _this = _super.call(this) || this;
        _this.callbacks = (_a = {},
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].TensorFlowHubModelNotification] = _this.hubModelNotification.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].ClassNameUrlsNotification] = _this.classNameUrlsNotification.bind(_this),
            _a[_interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].LocalModelInputNotification] = _this.loadLocalCnn.bind(_this),
            _a);
        return _this;
    }
    ConvolutionalNeuralNetworkSettings.xmlRequest = function (path, type) {
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
    ConvolutionalNeuralNetworkSettings.prototype.loadCnnModel = function (tensorHubUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var startTime, cnnModel;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.needToLoadModel(tensorHubUrl)) {
                            return [2 /*return*/, undefined];
                        }
                        console.log("Loading model...");
                        startTime = performance.now();
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadGraphModel"](tensorHubUrl, { fromTFHub: true })];
                    case 1:
                        cnnModel = _a.sent();
                        console.log("Model loaded  in " + Math.floor(performance.now() - startTime) + " ms...");
                        return [2 /*return*/, cnnModel];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.next = function (message) {
        if (this.callbacks[message.type]) {
            this.callbacks[message.type](message);
        }
    };
    ConvolutionalNeuralNetworkSettings.prototype.complete = function () {
    };
    ConvolutionalNeuralNetworkSettings.prototype.error = function (e) {
    };
    ConvolutionalNeuralNetworkSettings.prototype.hubModelNotification = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var model, classNames, settings, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.localClassesNames[message.cnnModelHub.dataset]) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.loadCnnModel(message.cnnModelHub.url)];
                    case 2:
                        model = _a.sent();
                        return [4 /*yield*/, this.loadClassNames(message.cnnModelHub.dataset)];
                    case 3:
                        classNames = _a.sent();
                        settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, message), { classNames: classNames });
                        this.updateSetting(settings);
                        this.notify(model);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.warn("Unable update cnn settings: ", e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.classNameUrlsNotification = function (notification) {
        this.localClassesNames = notification.urls;
        console.log("local Classes Names", this.localClassesNames);
    };
    ConvolutionalNeuralNetworkSettings.prototype.loadLocalCnn = function (notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, zipDir, model;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("notification", notification);
                        return [4 /*yield*/, ConvolutionalNeuralNetworkSettings.xmlRequest(notification.url, "arraybuffer")];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, jszip__WEBPACK_IMPORTED_MODULE_4__["loadAsync"](data)];
                    case 2:
                        zipDir = _a.sent();
                        return [4 /*yield*/, this.loadLocalSettings(zipDir)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadLocalModel(zipDir)];
                    case 4:
                        model = _a.sent();
                        this.notify(model);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.RecoverySettingsPath = function (zipDir) {
        var e_2, _a;
        var zipFiles = Object.values(zipDir.files);
        try {
            for (var zipFiles_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(zipFiles), zipFiles_1_1 = zipFiles_1.next(); !zipFiles_1_1.done; zipFiles_1_1 = zipFiles_1.next()) {
                var file = zipFiles_1_1.value;
                if (file.dir) {
                    return file.name + "settings.json";
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (zipFiles_1_1 && !zipFiles_1_1.done && (_a = zipFiles_1.return)) _a.call(zipFiles_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        throw Error("Zip need to have root dir ");
    };
    ConvolutionalNeuralNetworkSettings.prototype.loadLocalSettings = function (zipDir) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var settingsPath, json, settings;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        settingsPath = this.RecoverySettingsPath(zipDir);
                        console.log(settingsPath, zipDir);
                        return [4 /*yield*/, zipDir.files[settingsPath].async("text")];
                    case 1:
                        json = _a.sent();
                        settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, JSON.parse(json)), { type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].TensorFlowHubModelNotification, id: _utils_user_interface_communication__WEBPACK_IMPORTED_MODULE_5__["USER_INTERFACE_COMMUNICATION_ID"] });
                        this.updateSetting(settings);
                        zipDir.remove(settingsPath);
                        console.log("Zip files", zipDir.files);
                        return [2 /*return*/];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.loadLocalModel = function (zipDir) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var files;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.zipFilesToFiles(zipDir.files)];
                    case 1:
                        files = _a.sent();
                        console.log(zipDir, files);
                        return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadGraphModel"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["io"].browserFiles(files))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.zipFilesToFiles = function (zipFiles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var files, jsonFile, _a, _b, zipFile, blob, file, e_3_1;
            var e_3, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
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
                        if (zipFile.dir) {
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
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([jsonFile], files)];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.notify = function (cnnModel) {
        console.log("notificando  observers", this.currentSettings, "CNN Model", cnnModel);
        this.notifyCnn(cnnModel);
        // this.notifyLoadImage(cnnModel)
        this.notifyUserInterface();
    };
    ConvolutionalNeuralNetworkSettings.prototype.loadClassNames = function (dataset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.needToLoadClassNames(dataset)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ConvolutionalNeuralNetworkSettings.xmlRequest(this.localClassesNames[dataset])];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, JSON.parse(json)];
                    case 2: return [2 /*return*/, this.currentSettings.classNames];
                }
            });
        });
    };
    ConvolutionalNeuralNetworkSettings.prototype.needToLoadModel = function (url) {
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
    ConvolutionalNeuralNetworkSettings.prototype.needToLoadClassNames = function (dataset) {
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
    ConvolutionalNeuralNetworkSettings.prototype.updateSetting = function (settings) {
        var enables = settings.enables ? settings.enables : Object.values(settings.classNames).map(function () { return true; });
        var oldSettings = this.currentSettings ? this.currentSettings : {};
        console.log("updateSetting", settings, oldSettings);
        this.currentSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldSettings), settings), { enables: enables });
    };
    ConvolutionalNeuralNetworkSettings.prototype.notifyLoadImage = function (cnnModel) {
        if (!cnnModel) {
            return;
        }
        var shape = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(cnnModel.inputs[0].shape);
        if (!shape) {
            throw Error("Shape is undefined " + shape);
        }
        console.log("Shape of Model : ", shape);
        var notification = {
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].InputShapeNotification,
            shape: shape.splice(1, shape.length)
        };
        this.subject.next(notification);
    };
    ConvolutionalNeuralNetworkSettings.prototype.notifyCnn = function (cnnModel) {
        var cnnMessage = {
            id: "ConvolutionalNeuralNetworkSettings",
            type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationTypes"].CnnModelSettingNotification,
            cnnModel: cnnModel,
            classNames: this.currentSettings.classNames,
            enables: this.currentSettings.enables
        };
        this.subject.next(cnnMessage);
    };
    ConvolutionalNeuralNetworkSettings.prototype.notifyUserInterface = function () {
        this.subject.next(this.currentSettings);
    };
    return ConvolutionalNeuralNetworkSettings;
}(_utils_module__WEBPACK_IMPORTED_MODULE_2__["default"]));



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
        var notification = { type: _interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].LocalModelInputNotification, url: url };
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