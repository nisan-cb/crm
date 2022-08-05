import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import DB from './db';

const db = new DB();
db.connect()
  .then(() => {
    console.log("connected to DB");
    db.insertNewRecord(2, 5, 444)
      .then(() => console.log("inserted"))
      .catch(err => console.log("error ***", err))
  })
  .catch((err) => console.log("DB connection failed"))




const app: Express = express();
app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root));

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
