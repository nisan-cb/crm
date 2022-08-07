import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import DB from './db';


const app: Express = express();
const db = new DB();
const port = process.env.PORT || 4000;

app.use(cors())
// Create data base connection
db.connect()
  .then(async () => {
    console.log("connected to DB");
    const records = await db.getAllServices()
    console.log(records)
  })
  .catch((err) => console.log("DB connection failed"))



// app.use(cors());
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
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});



app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
