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
    NotificationTypes[NotificationTypes["InputShapeNotification"] = 8] = "InputShapeNotification";
    NotificationTypes[NotificationTypes["LocalModelInputNotification"] = 9] = "LocalModelInputNotification";
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/interfaces/notifications */ "./src/app/interfaces/notifications.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var ChromeBrowserContentCommunication = /** @class */ (function () {
    function ChromeBrowserContentCommunication() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.observer = {
            next: this.sender.bind(this),
            error: function () {
            },
            complete: function () {
            }
        };
        this.port = undefined;
    }
    ChromeBrowserContentCommunication.prototype.sender = function (message) {
        if (this.port === undefined) {
            throw new Error("try to send message when channel is not opened");
        }
        message.type = _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ContentNotification;
        message.id = this.port.name;
        this.port.postMessage(message);
    };
    ChromeBrowserContentCommunication.prototype.listener = function (notification) {
        this.subject.next(notification);
    };
    ChromeBrowserContentCommunication.prototype.tryToCommunicate = function () {
        try {
            this.port = chrome.runtime.connect({ name: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])() });
            this.port.onMessage.addListener(this.listener.bind(this));
        }
        catch (e) {
            console.error("unable to open channel from content script");
            console.error(e);
        }
    };
    return ChromeBrowserContentCommunication;
}());
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


var chromeBrowserContentCommunication = new _chrome_browser_content_communication__WEBPACK_IMPORTED_MODULE_0__["default"]();
var documentObserver = new _document_observer__WEBPACK_IMPORTED_MODULE_1__["default"]();
chromeBrowserContentCommunication.subject.subscribe(documentObserver.observer);
documentObserver.subject.subscribe(chromeBrowserContentCommunication.observer);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DocumentObserver = /** @class */ (function () {
    function DocumentObserver() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.observer = {
            next: this.listener.bind(this),
            error: function () {
            },
            complete: function () {
            }
        };
        this.checkTable = {};
        this.errorMessages = {
            noSrc: new Error("Cannot read src, property undefined"),
            noArray: new Error("Cannot read urlImages or urlVideos, property undefined")
        };
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
    DocumentObserver.prototype.sendAllCurrentUrlData = function () {
        var urlImages = this.getAllCurrentImages();
        var urlVideos = this.getAllCurrentVideos();
        this.sendData(urlImages, urlVideos);
    };
    DocumentObserver.prototype.getAllCurrentImages = function () {
        var imagesTable = new Array(document.images.length);
        for (var i = 0; i < document.images.length; i++) {
            if (document.images[i].src.length) {
                imagesTable[i] = document.images[i].src;
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
        var urlImages = new Array();
        var urlVideos = new Array();
        try {
            for (var mutations_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                var mutation = mutations_1_1.value;
                var target = mutation.target;
                if (target instanceof HTMLImageElement) {
                    if (!this.checkSrc(target, target.src)) {
                        urlImages.push(target.src);
                    }
                }
                else if (target instanceof HTMLVideoElement) {
                    var src = DocumentObserver.getUrlVideo(target);
                    if (!this.checkSrc(target, src)) {
                        urlVideos.push(src);
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
        return { urlImages: urlImages, urlVideos: urlVideos };
    };
    DocumentObserver.prototype.observerImages = function (mutations, observer) {
        var data = this.getAllNewData(mutations);
        this.sendData(data.urlImages, data.urlVideos);
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
    DocumentObserver.prototype.sendData = function (urlImages, urlVideos) {
        if (urlImages === undefined || urlVideos === undefined) {
            throw this.errorMessages.noArray;
        }
        var notification = {
            id: "replace  this in communication",
            type: _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].ContentNotification,
            urlImages: urlImages,
            urlVideos: urlVideos
        };
        this.subject.next(notification);
    };
    DocumentObserver.prototype.listener = function (notification) {
        if (notification.type !== _app_interfaces_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationTypes"].FilterNotification) {
            return;
        }
        if (notification.predict === "show") {
            this.changeCss(notification.imgSrc);
        }
    };
    DocumentObserver.prototype.changeCss = function (src) {
        if (src === undefined) {
            throw this.errorMessages.noSrc;
        }
        if (this.checkTable[src]) { // setAttribute("style", "display: !important")
            this.checkTable[src].setAttribute("style", "display: inline !important");
        }
    };
    return DocumentObserver;
}());
/* harmony default export */ __webpack_exports__["default"] = (DocumentObserver);


/***/ })

},[["./src/content-script/content-script.ts","runtime","vendor"]]]);
//# sourceMappingURL=content-script.js.map