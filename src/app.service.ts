import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

type User = {
  name: string;
  email: string;
  message: string;
};

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }

  public async sendUserContact(user: User) {
    await this.mailerService.sendMail({
      to: process.env.EMAIL_USER,
      subject: `Contato de ${user.name}`,
      template: './templates/contact',
      context: {
        name: user.name,
        email: user.email,
        message: user.message,
      },
    });
  }
}
