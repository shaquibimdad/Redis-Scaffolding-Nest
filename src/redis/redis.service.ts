import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  async getValue(key: string): Promise<string> {
    return this.redis.get(key);
  }

  async setValue(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
  }
}
