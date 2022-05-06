import { MailAdapter, SendMailData } from '../mail-adapters'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",  
  port: 2525,  
  auth: {
    user: "9869996fb1aca3",
    pass: "2611780fb46f41"    
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
   
  await transport.sendMail({
    from: 'Equipe Feedget <cpd@twimobiliaria.com.br>',
    to: 'Agnaldo Cordeiro <cpd@twimobiliaria.com.br>',
    subject: subject,
    html: body,
  }) 
 }
}