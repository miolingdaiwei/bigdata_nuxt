import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/filter/trans/TransformInterceptor.filter';
import 'reflect-metadata';
// 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(8686);
}
bootstrap();
