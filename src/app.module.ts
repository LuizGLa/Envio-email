import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'luizgustavolima200@gmail.com', // generated ethereal user
          pass: 'ozkj wybl fqve jqlc', // generated ethereal password
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>', // outgoing email ID
      },
      template: {
        dir: process.cwd() + '/src',
        adapter: new PugAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }