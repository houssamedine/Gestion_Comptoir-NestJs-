import { Module } from '@nestjs/common';
import { MessagersService } from './messagers.service';
import { MessagersController } from './messagers.controller';

@Module({
  controllers: [MessagersController],
  providers: [MessagersService]
})
export class MessagersModule {}
