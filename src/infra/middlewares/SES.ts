import handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import * as AWS from 'aws-sdk';

import { PromiseResult } from 'aws-sdk/lib/request';
import { SendEmailRequest } from 'aws-sdk/clients/ses';

export const SES = new AWS.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});

export type SendEmailWithSES = {
  recipientEmail: string;
  subject: string;
} & SendWelcomeEmail;

export type SendEmailWithRecoverySES = {
  recipientEmail: string;
  subject: string;
} & SendRecoveryPasswordEmail;

export const hbsTemplates = {
  recoveryPassword: 'recovery-password.html',
  welcomeMail: 'welcome-mail.html',
};

export type SendRecoveryPasswordEmail = {
  type: 'recoveryPassword';
  data: {
    userName: string;
    link: string;
    tempPass: string;
  };
};
export type SendWelcomeEmail = {
  type: 'welcomeMail';
  data: {
    userName: string;
    link?: string;
    tempPass?: string;
  };
};
export const EMAIL_TEMPLATES_PATH = path.resolve('src','infra', 'templates');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function sendEmailWithSES({
  recipientEmail,
  subject,
  data,
  type,
}: SendEmailWithSES | SendEmailWithRecoverySES): Promise<
  PromiseResult<AWS.SES.SendEmailResponse, AWS.AWSError>
> {
  const source = fs.readFileSync(
    path.join(EMAIL_TEMPLATES_PATH, hbsTemplates[type]),
    'utf8',
  );
  const template = handlebars.compile(source);
  const dataToSend = {
    userName: data.userName,
    link: data.link,
    tempPass: data.tempPass,
  };

  const emailParams:SendEmailRequest = {
    Source: String(process.env.AWS_SES_EMAIL_SENDER),
    ConfigurationSetName: 'iCods',
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: template(dataToSend),
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
  };

  return SES.sendEmail(emailParams).promise();
}
