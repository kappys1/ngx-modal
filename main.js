(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-modal/src/lib/NgxModal.ts":
/*!************************************************!*\
  !*** ./projects/ngx-modal/src/lib/NgxModal.ts ***!
  \************************************************/
/*! exports provided: NgxModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxModal", function() { return NgxModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgxModal = /** @class */ (function () {
    function NgxModal(_a) {
        var modal = _a.modal, component = _a.component;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modal = modal;
        this.component = component;
    }
    NgxModal.prototype.open = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.onOpen.emit(true);
            _this.modal.instance.open();
            res(true);
        });
    };
    NgxModal.prototype.close = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.onClose.emit(true);
            _this.modal.instance.close();
            res(true);
        });
    };
    NgxModal.prototype.destroy = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.onDestroy.emit(true);
            _this.modal.instance.close();
            setTimeout(function (val) {
                _this.modal.destroy();
                _this.component.destroy();
            }, 500);
            res(true);
        });
    };
    return NgxModal;
}());



/***/ }),

/***/ "./projects/ngx-modal/src/lib/ngx-modal.component.scss":
/*!*************************************************************!*\
  !*** ./projects/ngx-modal/src/lib/ngx-modal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none; }\n  :host.animated {\n    display: flex; }\n  :host.show {\n    pointer-events: unset;\n    opacity: 1;\n    z-index: 2000; }\n  /deep/ body.no-scroll {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4bWFyY29zL0RvY3VtZW50cy9Qcm9qZWN0cy9BTkdVTEFSL25neC1tb2RhbC9wcm9qZWN0cy9uZ3gtbW9kYWwvc3JjL2xpYi9uZ3gtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVO0VBQ1YsK0JBQTJCO0VBRzNCLGNBQWE7RUFHYixvQkFBbUI7RUFHbkIsa0JBQWlCO0VBR2pCLHdCQUF1QjtFQUd2Qix1QkFBc0I7RUFHdEIsb0JBQW1CO0VBQ25CLFdBQVU7RUFDVixxQkFBb0IsRUFXckI7RUF0Q0Q7SUE4QkksY0FBYSxFQUNkO0VBL0JIO0lBa0NJLHNCQUFxQjtJQUNyQixXQUFVO0lBQ1YsY0FBYSxFQUNkO0VBR0g7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1vZGFsL3NyYy9saWIvbmd4LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAmLmFuaW1hdGVke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAmLnNob3cge1xuICAgIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDIwMDA7XG4gIH1cbn1cblxuL2RlZXAvIGJvZHkubm8tc2Nyb2xse1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./projects/ngx-modal/src/lib/ngx-modal.component.ts":
/*!***********************************************************!*\
  !*** ./projects/ngx-modal/src/lib/ngx-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: NgxModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxModalComponent", function() { return NgxModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgxModalComponent = /** @class */ (function () {
    function NgxModalComponent(elRef) {
        this.elRef = elRef;
        this.enableBackdropDismiss = false;
        this.class = [];
    }
    NgxModalComponent.prototype.ngOnInit = function () {
    };
    NgxModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.class.map(function (val, i) {
            setTimeout(function () { return _this.elRef.nativeElement.classList.add(val); });
        });
    };
    NgxModalComponent.prototype.open = function () {
        var _this = this;
        document.getElementsByTagName('body')[0].classList.add('no-scroll');
        setTimeout(function () { return _this.elRef.nativeElement.classList.add('show'); }, 200);
    };
    NgxModalComponent.prototype.close = function () {
        var _this = this;
        document.getElementsByTagName('body')[0].classList.remove('no-scroll');
        setTimeout(function () { return _this.elRef.nativeElement.classList.remove('show'); }, 200);
    };
    NgxModalComponent.prototype.closeBackground = function (target) {
        if (this.enableBackdropDismiss && target === this.elRef.nativeElement) {
            this.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgxModalComponent.prototype, "closeBackground", null);
    NgxModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-modal',
            template: "",
            styles: [__webpack_require__(/*! ./ngx-modal.component.scss */ "./projects/ngx-modal/src/lib/ngx-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NgxModalComponent);
    return NgxModalComponent;
}());



/***/ }),

/***/ "./projects/ngx-modal/src/lib/ngx-modal.module.ts":
/*!********************************************************!*\
  !*** ./projects/ngx-modal/src/lib/ngx-modal.module.ts ***!
  \********************************************************/
/*! exports provided: NgxModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxModalModule", function() { return NgxModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-modal.component */ "./projects/ngx-modal/src/lib/ngx-modal.component.ts");



var NgxModalModule = /** @class */ (function () {
    function NgxModalModule() {
    }
    NgxModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgxModalComponent"]],
            imports: [],
            entryComponents: [
                _ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgxModalComponent"]
            ],
            exports: [_ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgxModalComponent"]]
        })
    ], NgxModalModule);
    return NgxModalModule;
}());



/***/ }),

/***/ "./projects/ngx-modal/src/lib/ngx-modal.service.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-modal/src/lib/ngx-modal.service.ts ***!
  \*********************************************************/
/*! exports provided: NgxModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxModalService", function() { return NgxModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-modal.component */ "./projects/ngx-modal/src/lib/ngx-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _NgxModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NgxModal */ "./projects/ngx-modal/src/lib/NgxModal.ts");




var MODAL_PARAMS = [
    { name: 'enableBackdropDismiss', value: false },
    { name: 'class', value: [] }
];
var NgxModalService = /** @class */ (function () {
    function NgxModalService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    NgxModalService.prototype.loadComponent = function (component) {
        // let newNode = document.createElement('div');
        // newNode.id = 'placeholder';
        // document.getElementsByTagName('body')[0].appendChild(newNode);
        // 1. Create a component reference from the component
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component);
        // .create(this.injector);
        return componentRef;
    };
    NgxModalService.prototype.loadView = function (componentRef) {
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        return domElem;
    };
    NgxModalService.prototype.appendToBody = function (domElem) {
        document.body.appendChild(domElem);
    };
    NgxModalService.prototype.create = function (component, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve) {
            setTimeout(function () {
                var modalRef = _this.loadComponent(_ngx_modal_component__WEBPACK_IMPORTED_MODULE_1__["NgxModalComponent"]).create(_this.injector);
                var componentRef = _this.loadComponent(component).create(_this.injector);
                _this.loadParams(componentRef, params);
                _this.loadModalParams(modalRef, params);
                var modalView = _this.loadView(modalRef);
                var componentView = _this.loadView(componentRef);
                modalView.appendChild(componentView);
                _this.appendToBody(modalView);
                var modal = new _NgxModal__WEBPACK_IMPORTED_MODULE_3__["NgxModal"]({
                    modal: modalRef,
                    component: componentRef,
                });
                _this.modalInComponent(componentRef, modal);
                resolve(modal);
            });
        });
    };
    NgxModalService.prototype.destroy = function (modal) {
        this.appRef.detachView(modal.hostView);
        modal.destroy();
    };
    NgxModalService.prototype.modalInComponent = function (component, modal) {
        component.instance['modal'] = modal;
    };
    NgxModalService.prototype.loadModalParams = function (modal, params) {
        MODAL_PARAMS.map(function (val) {
            if (val.name in params) {
                modal.instance[val.name] = params[val.name];
            }
        });
    };
    NgxModalService.prototype.loadParams = function (component, params) {
        Object.keys(params).map(function (key) {
            component.instance[key] = params[key];
        });
    };
    NgxModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
    ], NgxModalService);
    return NgxModalService;
}());



/***/ }),

/***/ "./projects/ngx-modal/src/public_api.ts":
/*!**********************************************!*\
  !*** ./projects/ngx-modal/src/public_api.ts ***!
  \**********************************************/
/*! exports provided: NgxModalModule, NgxModalService, NgxModal, NgxModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-modal.service */ "./projects/ngx-modal/src/lib/ngx-modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxModalService", function() { return _lib_ngx_modal_service__WEBPACK_IMPORTED_MODULE_0__["NgxModalService"]; });

/* harmony import */ var _lib_NgxModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/NgxModal */ "./projects/ngx-modal/src/lib/NgxModal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxModal", function() { return _lib_NgxModal__WEBPACK_IMPORTED_MODULE_1__["NgxModal"]; });

/* harmony import */ var _lib_ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-modal.component */ "./projects/ngx-modal/src/lib/ngx-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxModalComponent", function() { return _lib_ngx_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgxModalComponent"]; });

/* harmony import */ var _lib_ngx_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ngx-modal.module */ "./projects/ngx-modal/src/lib/ngx-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxModalModule", function() { return _lib_ngx_modal_module__WEBPACK_IMPORTED_MODULE_3__["NgxModalModule"]; });

/*
 * Public API Surface of ngx-modal
 */






/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h1>{{title}}</h1>\n</header>\n\n<main>\n\n  <section>\n    <header><h2>Install</h2></header>\n      <article>\n        <p>1. Install from NPM</p>\n        <pre><code>npm install ngx-modal --save</code></pre>\n      </article>\n      <article>\n        <p>2.Add to import Modules and Add to entry entryComponents in @NgModules, the modules that you want to put inside the modal.</p>\n        <pre>\n          <code>\n@NgModule({{ '{' }}\n  declarations: [\n    AppComponent,\n    SampleModalComponent,\n  ],\n  entryComponents: [\n    SampleModalComponent\n  ],\n  imports: [\n    BrowserModule,\n    FormsModule,\n    NgxModalModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\n        </code>\n        </pre>\n      </article>\n      <article>\n        <p>3. Import your Service in a component and Create a new Modal.</p>\n        <pre>\n          <code>\nexport class AppComponent {{ '{' }}\n\n  constructor(private modalService: NgxModalService) {{ '{' }}\n\n  }\n\n  openModal(){{ '{' }}\n    const params = {{ '{' }}};\n    this.modalService.create(SampleModalComponent, params).then((modal: NgxModal) => {{ '{' }}\n      modal.open();\n    });\n  }\n\n}\n        </code>\n        </pre>\n        <p>in params, you can add all params that you have into your component for init with values.</p>\n      </article>\n  </section>\n  <section>\n      <header>\n        <h2>Examples</h2>\n        <p><a target=\"_blank\" href=\"https://github.com/kappys1/ngx-modal/blob/master/src/app/app.component.ts\">see code here.</a></p>\n      </header>\n      <article>\n        <h3>Sample Modal</h3>\n        <button (click)=\"openSampleModal()\">Open Modal</button>\n      </article>\n      <article>\n        <h3>Sample Modal Without destroy</h3>\n        <button (click)=\"openModalWithoutDestroy()\">Open Modal</button>\n      </article>\n      <article>\n        <p>You can see all modal params <a target=\"_blank\" href=\"https://github.com/kappys1/ngx-modal/wiki/Modal-Params\">here</a></p>\n        <h3>Close background</h3>\n        <button (click)=\"openBackdropModal()\">Open Modal</button>\n      </article>\n      <article>\n        <h3>Events</h3>\n        <p>You can see all events <a target=\"_blank\" href=\"https://github.com/kappys1/ngx-modal/wiki/Events\">here</a></p>\n        <button (click)=\"openEventsModal()\">Open Modal</button>\n      </article>\n      <article>\n        <h3>Pass Parameters</h3>\n        <input [(ngModel)]=\"inputValue\">\n        <button (click)=\"openCheckbutton()\">Open Modal</button>\n      </article>\n      <article>\n        <h3>Animation Modal</h3>\n        <button (click)=\"openAnimation()\">Open Modal</button>\n      </article>\n  </section>\n</main>\n<footer>\n  {{year}} © Angular 2 carousel\n</footer>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ ngx-modal.fade {\n  transition: opacity 0.2s ease-in-out; }\n\n/deep/ ngx-modal.show {\n  opacity: 1; }\n\nheader {\n  font-size: 2.3rem; }\n\nheader p {\n    font-size: 1.5rem; }\n\ncode {\n  background-color: #eee;\n  border: 1px solid #999;\n  display: block;\n  padding: 20px; }\n\npre {\n  max-width: 100%;\n  white-space: pre-wrap; }\n\nfooter {\n  position: static;\n  bottom: 0;\n  left: 0;\n  color: white;\n  background: #007bff;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4bWFyY29zL0RvY3VtZW50cy9Qcm9qZWN0cy9BTkdVTEFSL25neC1tb2RhbC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4bWFyY29zL0RvY3VtZW50cy9Qcm9qZWN0cy9BTkdVTEFSL25neC1tb2RhbC9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0kscUNBQW9DLEVBQ3JDOztBQUpIO0VBT0ksV0FBVSxFQUNYOztBQUdIO0VBQ0Usa0JBQWlCLEVBSWxCOztBQUxEO0lBR0ksa0JBQWlCLEVBQ2xCOztBQUVIO0VBQ0UsdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULFFBQU87RUFDUCxhQUFZO0VBQ1osb0JDbENlO0VEbUNmLFlBQVc7RUFDWCxhQUFZO0VBR1osY0FBYTtFQUdiLG9CQUFtQjtFQUduQixrQkFBaUI7RUFHakIsd0JBQXVCO0VBR3ZCLHVCQUFzQjtFQUd0QixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvdmFyaWFibGVzXCI7XG4vZGVlcC8gbmd4LW1vZGFse1xuXG4gICYuZmFkZXtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAmLnNob3d7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBwe1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5jb2RlIHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5wcmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbmZvb3RlcntcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbiIsIiRwcmltYXJ5OiAjMDA3YmZmO1xuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_modal_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ngx-modal/src/public_api */ "./projects/ngx-modal/src/public_api.ts");
/* harmony import */ var _components_sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sample-modal/sample-modal.component */ "./src/app/components/sample-modal/sample-modal.component.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.title = 'ngx-modal';
        this.year = new Date().getFullYear();
    }
    AppComponent.prototype.openSampleModal = function () {
        this.openModal().then(function (modal) {
            modal.open();
        });
    };
    AppComponent.prototype.openModalWithoutDestroy = function () {
        var _this = this;
        if (this.modal) {
            this.modal.open();
        }
        else {
            this.openModal({ destroy: false }).then(function (modal) {
                _this.modal = modal;
                _this.modal.open();
            });
        }
    };
    AppComponent.prototype.openBackdropModal = function () {
        var param = { enableBackdropDismiss: true };
        this.openModal(param).then(function (modal) {
            modal.open();
        });
    };
    AppComponent.prototype.openEventsModal = function () {
        this.openModal().then(function (modal) {
            modal.open();
            modal.onDestroy.subscribe(function (val) { window.alert('Modal Destroyed'); });
        });
    };
    AppComponent.prototype.openCheckbutton = function () {
        var _this = this;
        var param = { paramValue: this.inputValue };
        this.openModal(param).then(function (modal) {
            modal.open();
            modal.onDestroy.subscribe(function (val) {
                _this.inputValue = modal.component.instance.paramValue;
            });
        });
    };
    AppComponent.prototype.openAnimation = function () {
        var param = { class: ['fade'] };
        this.openModal(param).then(function (modal) {
            setTimeout(function () { return modal.open(); });
        });
    };
    AppComponent.prototype.openModal = function (params) {
        if (params === void 0) { params = {}; }
        return this.modalService.create(_components_sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_3__["SampleModalComponent"], params);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ngx_modal_src_public_api__WEBPACK_IMPORTED_MODULE_2__["NgxModalService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _projects_ngx_modal_src_lib_ngx_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../projects/ngx-modal/src/lib/ngx-modal.module */ "./projects/ngx-modal/src/lib/ngx-modal.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sample-modal/sample-modal.component */ "./src/app/components/sample-modal/sample-modal.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_6__["SampleModalComponent"],
            ],
            entryComponents: [
                _components_sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_6__["SampleModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _projects_ngx_modal_src_lib_ngx_modal_module__WEBPACK_IMPORTED_MODULE_1__["NgxModalModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/sample-modal/sample-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sample-modal/sample-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Sample Modal</h1>\n</header>\n<section>\n  <article>\n    <button (click)=\"close()\">close</button>\n    <ng-container *ngIf=\"paramValue\">\n      <input [(ngModel)]=\"paramValue\">\n    </ng-container>\n    <div>orem ipsum dolor sit amet consectetur adipiscing elit cursus tristique, augue massa platea arcu eu lacinia bibendum sapien himenaeos, ridiculus pellentesque blandit euismod nostra fames ultricies sociosqu</div>\n  </article>\n</section>\n<div>\n"

/***/ }),

/***/ "./src/app/components/sample-modal/sample-modal.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/sample-modal/sample-modal.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 75%;\n  height: 75%;\n  background: white;\n  font-size: 1.6rem;\n  padding: 1em 2em; }\n  @media (min-width: 768px) and (max-width: 1024px) {\n    :host {\n      width: 50%;\n      height: 50%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4bWFyY29zL0RvY3VtZW50cy9Qcm9qZWN0cy9BTkdVTEFSL25neC1tb2RhbC9zcmMvYXBwL2NvbXBvbmVudHMvc2FtcGxlLW1vZGFsL3NhbXBsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFRakI7RUFOQztJQVBGO01BU0ksV0FBVTtNQUNWLFlBQVcsRUFHZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1wbGUtbW9kYWwvc2FtcGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDFlbSAyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLy9DU1NcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sample-modal/sample-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sample-modal/sample-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: SampleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleModalComponent", function() { return SampleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SampleModalComponent = /** @class */ (function () {
    function SampleModalComponent() {
        this.destroy = true;
    }
    SampleModalComponent.prototype.ngOnInit = function () {
    };
    SampleModalComponent.prototype.close = function () {
        this.modal.close();
        if (this.destroy) {
            this.modal.destroy();
        }
    };
    SampleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample-modal',
            template: __webpack_require__(/*! ./sample-modal.component.html */ "./src/app/components/sample-modal/sample-modal.component.html"),
            styles: [__webpack_require__(/*! ./sample-modal.component.scss */ "./src/app/components/sample-modal/sample-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SampleModalComponent);
    return SampleModalComponent;
}());



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexmarcos/Documents/Projects/ANGULAR/ngx-modal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map