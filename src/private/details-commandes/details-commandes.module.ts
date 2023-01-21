import { Module } from '@nestjs/common';
import { DetailsCommandesService } from './details-commandes.service';
import { DetailsCommandesController } from './details-commandes.controller';

@Module({
  controllers: [DetailsCommandesController],
  providers: [DetailsCommandesService]
})
export class DetailsCommandesModule {}
