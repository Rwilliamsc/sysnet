import { Injectable } from '@nestjs/common'
import * as Mailjet from 'node-mailjet' // another possible importing option

@Injectable()
export class EmailService {
  async sendEmail(email: string, message: string) {
    const mailjet = new Mailjet.Client({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    })

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MJ_FROM_EMAIL,
            Name: 'Infnet',
          },
          To: [
            {
              Email: email,
              Name: '',
            },
          ],
          Subject: 'Requerimento!',
          TextPart: message,
          HTMLPart: `<h3>Recado sobre requerimento!</h3><br />${message}`,
        },
      ],
    })
    request
      .then(result => {
        console.log('mensagem de sucesso', JSON.stringify(result.body))
      })
      .catch(err => {
        console.log('mensagem de erro', err)
      })
  }
}
