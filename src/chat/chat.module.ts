import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';

@Module({
  providers: [ChatGateway, RabbitmqService],
})
export class ChatModule {}
