import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Would be?';
  }
  getTest(): string {
    return 'testing';
  }
}
