"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=dialog.js.map