import 'dotenv/config'
import nodemailer from 'nodemailer'
import welcomeMailTemplate from './welcomeMailTemplate';
const logger = require("../../../../infra/middlewares/Logger");

interface MailRequest {
  email: string;
  password: string;
  signUpEmail: string;
  signUpName: string;
}

export interface MailResponse {
  status: number;
  message: string;
}

export default class WelcomeMailService {

  constructor() { }

  public async run({
    signUpEmail,
    signUpName,
    email,
    password
  }: MailRequest): Promise<MailResponse> {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: email,
          pass: password,
        },
      });

      let info = await transporter.sendMail({
        from: '"ICods Tech" <icods.tech@gmail.com>',
        to: `${signUpEmail}`,
        subject: "Conta iCods criada com sucesso ✅",
        html: welcomeMailTemplate(signUpName),
      });

      logger.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      return {
        message: info.response,
        status: 200
      }
    } catch (error: any) {
      logger.log(error)
      return {
        message: error.response,
        status: error.responseCode
      }
    }
  }
}
