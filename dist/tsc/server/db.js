"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DB {
    constructor() {
        this.client = new pg_1.Client({
            connectionString: process.env.PS_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }
    async connect() {
        await this.client.connect();
    }
    // Create branches table
    async createBranchesTable() {
        await this.client.query(`CREATE TABLE IF NOT EXISTS branches(
                code SERIAL PRIMARY KEY,
                city VARCHAR(10) NOT NULL
            );`);
    }
    // Create services table
    async createServicesTable() {
        await this.client.query(`CREATE TABLE IF NOT EXISTS services(
                code SERIAL PRIMARY KEY,
                description VARCHAR(50) NOT NULL
            );`);
    }
    // Create clients table
    async createClientsTable() {
        await this.client.query(`CREATE TABLE IF NOT EXISTS clients(
                id INTEGER PRIMARY KEY,
                name VARCHAR(10) NOT NULL,
                phone_number VARCHAR(10) NOT NULL
            );`);
    }
    // Create records table
    async createRecordTable() {
        await this.client.query(`CREATE TABLE IF NOT EXISTS records(
                number SERIAL PRIMARY KEY,
                branch_code INTEGER REFERENCES branches(code),
                client_id INTEGER REFERENCES clients(id),
                service_code INTEGER REFERENCES services(code)
            );`);
    }
}
exports.default = DB;
// FOREIGN KEY(location_id)
// REFERENCES locations(location_id), 
//# sourceMappingURL=db.js.map