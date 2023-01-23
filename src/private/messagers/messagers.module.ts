import { Messager } from './entities/messager.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MessagersService } from './messagers.service';
import { MessagersController } from './messagers.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Messager])],
  controllers: [MessagersController],
  providers: [MessagersService],
})
export class MessagersModule {}
