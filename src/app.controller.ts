import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

// 针对控制器的单元测试

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('list')
  getList(): string[] {
    return ['s', 'b'];
  }
  @Put('list/:id')
  update(): string {
    return 'update ';
  }
}
