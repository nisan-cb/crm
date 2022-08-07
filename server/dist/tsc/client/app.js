"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialog = exports.module = void 0;
const say_service_1 = require("./shared/say.service");
const dialog_1 = require("./shared/dialog");
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
//# sourceMappingURL=app.js.map