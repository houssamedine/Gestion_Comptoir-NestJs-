import { Employe } from './entities/employe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employe]),
    //Upload File
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [EmployesController],
  providers: [EmployesService],
})
export class EmployesModule {}
