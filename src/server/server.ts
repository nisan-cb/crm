import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import DB from './db';


const app: Express = express();
const db = new DB();
const port = process.env.PORT || 4000;

// Create data base connection
db.connect()
  .then(async () => {
    console.log("connected to DB");
  })
  .catch((err) => console.log("DB connection failed", err))



app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root));

app.get('/api/records', async (req, res) => {
  const allRecords = await db.getAllRecords();
  res.send(allRecords)
});

app.get('/api/services', async (req, res) => {
  const allServices = await db.getAllServices();
  res.send(allServices)
});

app.get('/api/branches', async (req, res) => {
  const branchesList = await db.getAllBranches();
  res.send(branchesList)
});

app.post('/api/insertNewRecord', async (req, res) => {
  console.log(req.body)
  // let service, branch, client_id, client_nmae, phone_number;
  const { service, branch, client_id, client_name, phone_number } = req.body
  console.log(req.body)
  try {
    // check if client exist in the system
    const client = await db.getClientById(client_id);
    console.log(client.rowCount);

    // if new client, add him to the system
    if (client.rowCount === 0) // new client
      await db.insertNewClient(client_id, client_name, phone_number)

    // finaly add new record
    await db.insertNewRecord(branch, service, client_id,);
    res.json({ msg: 'new record inserted' });
  } catch (error) {
    console.log(error);
  }





})

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});



app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
