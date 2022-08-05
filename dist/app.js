var app;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/tsc/client/app.js":
/*!********************************!*\
  !*** ./dist/tsc/client/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dialog = exports.module = void 0;
const say_service_1 = __webpack_require__(/*! ./shared/say.service */ "./dist/tsc/client/shared/say.service.js");
const dialog_1 = __webpack_require__(/*! ./shared/dialog */ "./dist/tsc/client/shared/dialog.js");
class Module {
    constructor() {
        this.title = 'Heroku Wakka';
        this.say = new say_service_1.Say();
        this.select = 'Dialog';
    }
    onload() {
        const h1 = document.getElementsByTagName('h1')[0];
        h1.innerText = this.title;
    }
    updateSelect() {
        const select = document.getElementById('select');
        this.select = select.value;
    }
    updateDisplay(msg) {
        const display = document.getElementById('display');
        display.innerText = msg;
    }
    shout() {
        const input = document.getElementById('msg');
        switch (this.select) {
            case 'Alert':
                this.say.alert(input.value);
                break;
            case 'Console':
                this.say.console(input.value);
                break;
            case 'UI':
                this.updateDisplay(input.value);
                break;
            case 'Dialog':
                exports.dialog.open(input.value);
                break;
        }
    }
}
exports.module = new Module();
exports.dialog = new dialog_1.Dialog();
window.addEventListener('load', () => {
    exports.module.onload();
});


/***/ }),

/***/ "./dist/tsc/client/shared/dialog.js":
/*!******************************************!*\
  !*** ./dist/tsc/client/shared/dialog.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dialog = void 0;
class Dialog {
    open(msg) {
        const dialog = document.getElementById('dialog');
        dialog.style.display = 'flex';
        const message = document.getElementById('message');
        message.innerText = msg;
    }
    close() {
        const dialog = document.getElementById('dialog');
        dialog.style.display = 'none';
    }
}
exports.Dialog = Dialog;


/***/ }),

/***/ "./dist/tsc/client/shared/say.service.js":
/*!***********************************************!*\
  !*** ./dist/tsc/client/shared/say.service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Say = void 0;
class Say {
    alert(msg) {
        alert(msg);
    }
    console(msg) {
        console.log(msg);
    }
}
exports.Say = Say;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/tsc/client/app.js");
/******/ 	app = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map