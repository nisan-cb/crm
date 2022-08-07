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
const app = (0, express_1.default)();
const db = new db_1.default();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
// Create data base connection
db.connect()
    .then(async () => {
    console.log("connected to DB");
    const records = await db.getAllRecords();
    console.log(records);
})
    .catch((err) => console.log("DB connection failed"));
// app.use(cors());
app.use((0, body_parser_1.json)());
const root = path_1.default.join(process.cwd(), 'dist');
app.use(express_1.default.static(root));
app.get('/api/records', async (req, res) => {
    const allRecords = await db.getAllRecords();
    res.send(allRecords);
});
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(root, 'index.html'));
});
app.listen(port, () => {
    console.log('Hosted: http://localhost:' + port);
});
//# sourceMappingURL=server.js.map