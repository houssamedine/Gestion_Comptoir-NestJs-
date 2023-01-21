import { Module } from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { FournisseursController } from './fournisseurs.controller';

@Module({
  controllers: [FournisseursController],
  providers: [FournisseursService]
})
export class FournisseursModule {}
