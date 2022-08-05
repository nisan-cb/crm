"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const db_1 = __importDefault(require("./db"));
const db = new db_1.default();
db.connect()
    .then(() => {
    console.log("connected to DB");
    db.insertNewRecord(2, 5, 444)
        .then(() => console.log("inserted"))
        .catch(err => console.log("error ***", err));
})
    .catch((err) => console.log("DB connection failed"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
const root = path_1.default.join(process.cwd(), 'dist');
app.use(express_1.default.static(root));
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(root, 'index.html'));
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Hosted: http://localhost:' + port);
});
//# sourceMappingURL=server.js.map