import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Rajashekar Gande!';
  }
  getAbout(): string {
    return  'Rajashekar Gande, Software Developer!';
  }
}
