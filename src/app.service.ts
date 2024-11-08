import { Injectable } from '@nestjs/common';
import { TaskService } from './task/task.service';

@Injectable()
export class AppService {
  constructor(private taskService: TaskService) {}
  getHello(): string {
    this.taskService.sayHello();
    return 'Hello World!';
  }
}
