import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
var fs = require('fs');


export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;  
  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })  
  
  return res.status(201).send()
})

routes.get('/download', function (req, res) {
  const file = "/public/Boleto-12345.pdf";
  res.download(file); // Set disposition and send it.
});
const cpf = "42333150821"

routes.post(`/${cpf}`, function (req, res) {
  var file = fs.createReadStream("./public/Boleto-12345.pdf");
  var stat = fs.statSync('./public/Boleto-12345.pdf');

  res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=table1.pdf');
  file.pipe(res)
  res.download(file);
});

 
   

