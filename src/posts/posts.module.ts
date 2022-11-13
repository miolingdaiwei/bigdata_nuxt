// src/posts/posts.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PostsController } from './posts.controller';
import { PostsEntity } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([PostsEntity])],
})
export class PostsModule {}
