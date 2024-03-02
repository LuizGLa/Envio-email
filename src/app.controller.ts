import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('contact')
export class AppController {
  constructor(private appService: AppService) { }

  @Post()
  sendMail(@Body() contact: { name: string; email: string; message: string }) {
    return this.appService.sendUserContact(contact);
  }
}
