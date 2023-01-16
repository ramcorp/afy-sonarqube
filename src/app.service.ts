import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  test(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 5000);
    });
  }

  testCodeSmells(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 5000);
    });
  }
}
