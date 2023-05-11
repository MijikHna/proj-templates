import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const helloWorld: { hello: string; world: string } = {
      hello: 'Hello',
      world: 'World',
    };

    if (helloWorld.hello == 'Hello') {
      console.log('hello')
    }

    return `${helloWorld.hello} ${helloWorld.world}`;
  }
}
