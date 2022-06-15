import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(routes)

app.get('/download', function(req, res){
  const file = "/upload-folder/Boleto-12345.pdf";
  res.download(file); // Set disposition and send it.
});

app.listen(process.env.PORT || 3333, () => {
  console.log('listening on');
})