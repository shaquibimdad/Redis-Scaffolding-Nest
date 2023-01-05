import { Controller, Get, Param, Post } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller()
export class AppController {
  constructor(private readonly redisService: RedisService) {}

  @Get(':key')
  async getValue(@Param('key') key: string): Promise<string> {
    return this.redisService.getValue(key);
  }

  @Post(':key/:value')
  async setValue(
    @Param('key') key: string,
    @Param('value') value: string,
  ): Promise<void> {
    await this.redisService.setValue(key, value);
  }
}
