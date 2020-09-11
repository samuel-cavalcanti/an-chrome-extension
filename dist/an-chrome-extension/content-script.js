(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-script"],{

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
    NotificationTypes[NotificationTypes["LocalModelInputNotification"] = 8] = "LocalModelInputNotification";
    NotificationTypes[NotificationTypes["ImageDataNotification"] = 9] = "ImageDataNotification";
    NotificationTypes[NotificationTypes["ImageUrlsNotification"] = 10] = "ImageUrlsNotification";
    NotificationTypes[NotificationTypes["ImageByURINotification"] = 11] = "ImageByURINotification";
})(NotificationTypes || (NotificationTypes = {}));


/***/ }),

/***/ "./src/content-script/chrome-browser-content-communication.ts":
/*!********************************************************************!*\
  !*** ./src/content-script/chrome-browser-content-communication.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/module */ "./src/utils/module.ts");



var ChromeBrowserContentCommunication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChromeBrowserContentCommunication, _super);
    function ChromeBrowserContentCommunication() {
        return _super.call(this) || this;
    }
    ChromeBrowserContentCommunication.prototype.complete = function () {
    };
    ChromeBrowserContentCommunication.prototype.error = function (e) {
    };
    ChromeBrowserContentCommunication.prototype.next = function (notification) {
        if (this.port === undefined) {
            throw new Error("try to send message when channel is not opened");
        }
        notification.id = this.port.name;
        this.port.postMessage(notification);
    };
    ChromeBrowserContentCommunication.prototype.listener = function (notification) {
        this.subject.next(notification);
    };
    ChromeBrowserContentCommunication.prototype.tryToCommunicate = function () {
        try {
            this.port = chrome.runtime.connect({ name: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])() });
            this.port.onMessage.addListener(this.listener.bind(this));
        }
        catch (e) {
            console.error("unable to open channel from content script");
            console.error(e);
        }
    };
    return ChromeBrowserContentCommunication;
}(_utils_module__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ChromeBrowserContentCommunication);


/***/ }),

/***/ "./src/content-script/content-script.ts":
/*!**********************************************!*\
  !*** ./src/content-script/content-script.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chrome_browser_content_communication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chrome-browser-content-communication */ "./src/content-script/chrome-browser-content-communication.ts");
/* harmony import */ var _document_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-observer */ "./src/content-script/document-observer.ts");
/* harmony import */ var _utils_logger_time_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/logger/time-logger */ "./src/utils/logger/time-logger.ts");



var chromeBrowserContentCommunication = new _chrome_browser_content_communication__WEBPACK_IMPORTED_MODULE_0__["default"]();
var documentObserver = new _document_observer__WEBPACK_IMPORTED_MODULE_1__["default"]();
chromeBrowserContentCommunication.observe(documentObserver);
documentObserver.observe(chromeBrowserContentCommunication);
if (_utils_logger_time_logger__WEBPACK_IMPORTED_MODULE_2__["ENABLE_LOGGERS"]) {
    var timeLogger = new _utils_logger_time_logger__WEBPACK_IMPORTED_MODULE_2__["TimeLogger"]("content Script");
    timeLogger.observe(chromeBrowserContentCommunication);
    timeLogger.observe(documentObserver);
}
chromeBrowserContentCommunication.tryToCommunicate();
documentObserver.start();


/***/ }),

/***/ "./src/content-script/document-observer.ts":
/*!*************************************************!*\
  !*** ./src/content-script/document-observer.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/module */ "./src/utils/module.ts");
/* harmony import */ var _utils_logger_time_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/logger/time-logger */ "./src/utils/logger/time-logger.ts");




var DocumentObserver = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DocumentObserver, _super);
    function DocumentObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkTable = {};
        _this.errorMessages = {
            noSrc: new Error("Cannot read src, property undefined"),
            noArray: new Error("Cannot read urlImages or urlVideos, property undefined")
        };
        _this.logger = new _utils_logger_time_logger__WEBPACK_IMPORTED_MODULE_3__["TimeLogger"]("image_load_browser");
        return _this;
    }
    DocumentObserver.getUrlVideo = function (video) {
        if (video === undefined) {
            throw new Error("video is undefined");
        }
        if (video.src.substring(0, 4) === "blob" || !video.src) {
            if (video.baseURI) {
                return video.baseURI;
            }
        }
        if (video.src) {
            return video.src;
        }
        return "";
    };
    DocumentObserver.prototype.start = function () {
        this.sendAllCurrentUrlData();
        this.createObserver();
    };
    DocumentObserver.prototype.complete = function () {
    };
    DocumentObserver.prototype.error = function (e) {
    };
    DocumentObserver.prototype.next = function (notification) {
        if (notification.type !== _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].FilterNotification) {
            return;
        }
        if (notification.predict === "show") {
            this.changeCss(notification.imgSrc);
        }
    };
    DocumentObserver.prototype.sendAllCurrentUrlData = function () {
        var urlImages = this.getAllCurrentImages();
        var urlVideos = this.getAllCurrentVideos();
        this.sendData(urlImages, urlVideos);
    };
    DocumentObserver.prototype.getAllCurrentImages = function () {
        var imagesTable = new Array(document.images.length);
        for (var i = 0; i < document.images.length; i++) {
            if (document.images[i].src.length) {
                imagesTable[i] = document.images[i];
                this.checkTable[document.images[i].src] = document.images[i];
            }
        }
        return imagesTable;
    };
    DocumentObserver.prototype.getAllCurrentVideos = function () {
        var e_1, _a;
        var elements = document.getElementsByTagName("video");
        var videos = new Array(elements.length);
        try {
            for (var elements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                var url = DocumentObserver.getUrlVideo(element);
                if (url.length) {
                    this.checkTable[url] = element;
                    videos.push(element);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return videos;
    };
    DocumentObserver.prototype.checkSrc = function (target, url) {
        if (this.checkTable[url] === undefined) {
            this.checkTable[url] = target;
            return false;
        }
        return true;
    };
    DocumentObserver.prototype.getAllNewData = function (mutations) {
        var e_2, _a;
        var images = new Array();
        var videos = new Array();
        try {
            for (var mutations_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                var mutation = mutations_1_1.value;
                var target = mutation.target;
                if (target instanceof HTMLImageElement) {
                    if (!this.checkSrc(target, target.src)) {
                        images.push(target);
                    }
                }
                else if (target instanceof HTMLVideoElement) {
                    var src = DocumentObserver.getUrlVideo(target);
                    if (!this.checkSrc(target, src)) {
                        videos.push(target);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (mutations_1_1 && !mutations_1_1.done && (_a = mutations_1.return)) _a.call(mutations_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { images: images, videos: videos };
    };
    DocumentObserver.prototype.observerImages = function (mutations, observer) {
        var _a = this.getAllNewData(mutations), images = _a.images, videos = _a.videos;
        this.sendData(images, videos);
    };
    DocumentObserver.prototype.createObserver = function () {
        var observer = new MutationObserver(this.observerImages.bind(this));
        var config = {
            childList: false,
            attributes: true,
            characterData: true,
            subtree: true,
        };
        observer.observe(document.body, config);
    };
    DocumentObserver.prototype.sendData = function (images, videos) {
        if (images === undefined || videos === undefined) {
            throw this.errorMessages.noArray;
        }
        this.sendImageUrlsNotification(images);
        // this.sendContentNotification(images, videos)
    };
    DocumentObserver.prototype.changeCss = function (src) {
        if (src === undefined) {
            throw this.errorMessages.noSrc;
        }
        if (this.checkTable[src]) { // setAttribute("style", "display: !important")
            this.checkTable[src].setAttribute("style", "display: inline !important");
        }
    };
    DocumentObserver.prototype.sendImageUrlsNotification = function (images) {
        var e_3, _a;
        var _this = this;
        var _loop_1 = function (image) {
            if (image) {
                this_1.logger.updateTime(image.src);
                image.onload = function () {
                    _this.logger.updateTime(image.src);
                };
                this_1.subject.next({ type: _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ImageSourceNotification, message: image.src });
            }
        };
        var this_1 = this;
        try {
            for (var images_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(images), images_1_1 = images_1.next(); !images_1_1.done; images_1_1 = images_1.next()) {
                var image = images_1_1.value;
                _loop_1(image);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (images_1_1 && !images_1_1.done && (_a = images_1.return)) _a.call(images_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    DocumentObserver.prototype.sendContentNotification = function (images, videos) {
        var contentNotification = {
            id: "replace  this in communication",
            type: _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ContentNotification,
            images: images,
            videos: videos
        };
        this.subject.next(contentNotification);
    };
    return DocumentObserver;
}(_utils_module__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (DocumentObserver);


/***/ }),

/***/ "./src/utils/logger/time-logger.ts":
/*!*****************************************!*\
  !*** ./src/utils/logger/time-logger.ts ***!
  \*****************************************/
/*! exports provided: ENABLE_LOGGERS, TimeLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_LOGGERS", function() { return ENABLE_LOGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLogger", function() { return TimeLogger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module */ "./src/utils/module.ts");
/* harmony import */ var _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/interfaces/notifications */ "./src/app/interfaces/notifications.ts");



var ENABLE_LOGGERS = true;
var TimeLogger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeLogger, _super);
    function TimeLogger(loggerName) {
        var _a;
        var _this = _super.call(this) || this;
        _this.loggerName = loggerName;
        _this.exportCSV = false;
        _this.timers = {};
        _this.callbacks = (_a = {},
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ImageSourceNotification] = _this.imageSourceNotification.bind(_this),
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].FilterNotification] = _this.filterNotification.bind(_this),
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ImageNotification] = _this.imageNotification.bind(_this),
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ContentNotification] = _this.contentNotification.bind(_this),
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ImageDataNotification] = _this.imageDataNotification.bind(_this),
            _a[_app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationTypes"].ImageUrlsNotification] = _this.imageUrlsNotification.bind(_this),
            _a);
        return _this;
    }
    TimeLogger.prototype.toCsvFile = function (data) {
        var a = document.createElement("a");
        var blob = new Blob([data], { type: "text/csv" });
        a.href = URL.createObjectURL(blob);
        a.download = this.loggerName + ".csv";
        document.body.appendChild(a);
        a.click();
    };
    TimeLogger.prototype.complete = function () {
    };
    TimeLogger.prototype.error = function (e) {
    };
    TimeLogger.prototype.next = function (notification) {
        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification);
        }
    };
    TimeLogger.prototype.imageSourceNotification = function (notification) {
        this.updateTime(notification.message);
    };
    TimeLogger.prototype.filterNotification = function (notification) {
        this.updateTime(notification.imgSrc);
    };
    TimeLogger.prototype.imageNotification = function (notification) {
        this.updateTime(notification.img.src);
    };
    TimeLogger.prototype.contentNotification = function (notification) {
        var _this = this;
        if (notification.images === undefined) {
            return;
        }
        notification.images.forEach(function (value) { return _this.updateTime(value.src); });
    };
    TimeLogger.prototype.imageDataNotification = function (notification) {
        var _this = this;
        if (notification.inputs === undefined) {
            return;
        }
        notification.inputs.forEach(function (value) { return _this.updateTime(value.src); });
    };
    TimeLogger.prototype.imageUrlsNotification = function (notification) {
        notification.imageUrls.forEach(this.updateTime.bind(this));
    };
    TimeLogger.prototype.updateTime = function (index) {
        var currentTimeInMilliseconds = new Date().getTime();
        if (this.timers[index]) {
            this.timers[index].timeInMilliseconds = currentTimeInMilliseconds - this.timers[index].timeInMilliseconds;
            this.timers[index].isDate = false;
        }
        else {
            this.timers[index] = { timeInMilliseconds: currentTimeInMilliseconds, isDate: true };
        }
        this.toCsvColumn();
    };
    TimeLogger.prototype.toCsvColumn = function () {
        var e_1, _a;
        var loggedTimes = Object.values(this.timers).filter(function (value) { return value.isDate === false; });
        if (loggedTimes.length < 600) {
            console.log(this.loggerName + " loggedTimes " + loggedTimes.length);
            return;
        }
        if (this.exportCSV) {
            return;
        }
        var csv = this.loggerName + "\n";
        try {
            for (var loggedTimes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(loggedTimes), loggedTimes_1_1 = loggedTimes_1.next(); !loggedTimes_1_1.done; loggedTimes_1_1 = loggedTimes_1.next()) {
                var timer = loggedTimes_1_1.value;
                csv += timer.timeInMilliseconds + "\n";
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (loggedTimes_1_1 && !loggedTimes_1_1.done && (_a = loggedTimes_1.return)) _a.call(loggedTimes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.toCsvFile(csv);
        this.exportCSV = true;
    };
    return TimeLogger;
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
    Module.prototype.observe = function (abstractModule) {
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


/***/ })

},[["./src/content-script/content-script.ts","runtime","vendor"]]]);
//# sourceMappingURL=content-script.js.map