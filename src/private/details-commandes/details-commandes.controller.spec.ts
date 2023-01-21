import { Test, TestingModule } from '@nestjs/testing';
import { DetailsCommandesController } from './details-commandes.controller';
import { DetailsCommandesService } from './details-commandes.service';

describe('DetailsCommandesController', () => {
  let controller: DetailsCommandesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsCommandesController],
      providers: [DetailsCommandesService],
    }).compile();

    controller = module.get<DetailsCommandesController>(DetailsCommandesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
