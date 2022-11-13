import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
// 应用程序的根模块(Module)

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'blog',
      username: 'root',
      password: '135790',
      synchronize: true,
      // entities: [__dirname + '.entity.{ts,js}'],
      retryAttempts: 10,
      retryDelay: 500,
      autoLoadEntities: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
