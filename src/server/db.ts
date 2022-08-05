import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config()


export default class DB {
    client: Client;

    constructor() {
        this.client = new Client({
            connectionString: process.env.PS_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
    }


    async connect() {
        await this.client.connect();
    }

    // Create branches table
    async createBranchesTable() {
        await this.client.query(
            `CREATE TABLE IF NOT EXISTS branches(
                code SERIAL PRIMARY KEY,
                city VARCHAR(10) NOT NULL
            );`
        );
    }

    // Create services table
    async createServicesTable() {
        await this.client.query(
            `CREATE TABLE IF NOT EXISTS services(
                code SERIAL PRIMARY KEY,
                description VARCHAR(50) NOT NULL
            );`
        );
    }

    // Create clients table
    async createClientsTable() {
        await this.client.query(
            `CREATE TABLE IF NOT EXISTS clients(
                id INTEGER PRIMARY KEY,
                name VARCHAR(10) NOT NULL,
                phone_number VARCHAR(10) NOT NULL
            );`
        );
    }

    // Create records table
    async createRecordTable() {
        await this.client.query(
            `CREATE TABLE IF NOT EXISTS records(
                number SERIAL PRIMARY KEY,
                branch_code INTEGER REFERENCES branches(code),
                client_id INTEGER REFERENCES clients(id),
                service_code INTEGER REFERENCES services(code)
            );`
        );
    }
}

// FOREIGN KEY(location_id)
// REFERENCES locations(location_id), 