import express from 'express'
import cors from 'cors'
import { routes } from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('listening on');
})