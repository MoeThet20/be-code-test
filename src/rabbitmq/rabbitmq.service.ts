import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

@Injectable()
export class RabbitmqService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'chat_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  sendMessage(pattern: string, data: any): Observable<any> {
    console.log(pattern, data);

    return from(this.client.send(pattern, data));
  }
}
