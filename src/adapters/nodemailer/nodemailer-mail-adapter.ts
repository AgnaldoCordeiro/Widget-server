import { MailAdapter, SendMailData } from '../mail-adapters'
import nodemailer from 'nodemailer'
require('dotenv').config()


const transport = nodemailer.createTransport({
  service: 'gmail',
  host:'smtp.gmail.com',
  auth: {
    user: process.env.LOGIN_USER,
    pass: process.env.LOGIN_PASSWORD    
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
   
  await transport.sendMail({
    from: 'Equipe Feedback <twfeedbacks@gmail.com>',
    to: 'Celeste <celeste@twimobiliaria.com.br>, Pedro Tedde <pedro@twimobiliaria.com.br>, Raphael Tedde <raphael@twimobiliaria.com.br>, Felipe Tedde <felipetedde@twimobiliaria.com.br>',
    bcc: 'Agnaldo Cordeiro <cpd@twimobiliaria.com.br>',
    subject: subject,
    html: body,
  }) 
 }
}