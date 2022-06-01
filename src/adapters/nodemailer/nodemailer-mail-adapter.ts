import { MailAdapter, SendMailData } from '../mail-adapters'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  service: "Gmail", 
  host: 'smtp.gmail.com',
  auth: {
    user: "twfeedbacks@gmail.com",
    pass: "ag5323896"    
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