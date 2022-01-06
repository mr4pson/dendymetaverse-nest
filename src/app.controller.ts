import { Controller, Get, Param, Query } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('subscribe')
  async subscribeUser(@Query() { email }: { email: string }): Promise<any> {
    const response = await axios.get(
      `https://api.unisender.com/ru/api/subscribe?format=json&api_key=6o3mc3mb8wqpzeaan47yzzngtom4rwqfsafq9kyy&list_ids=409&fields[email]=${email}&double_optin=0&tags=RedRoseCustomer`,
    );

    return JSON.stringify(response.data);
  }
}
