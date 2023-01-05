import { Module } from '@nestjs/common';
import { AppController } from './redis.controller';
import { RedisService } from './redis.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [RedisService],
})
export class AppModule {}
