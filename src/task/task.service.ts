import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  i = 0;
  @Cron(CronExpression.EVERY_5_SECONDS)
  sayHello() {
    console.log('cron job', this.i);
    this.i++;
  }
}
