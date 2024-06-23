import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [ChatModule],
  providers: [RabbitmqService],
})
export class AppModule {}
