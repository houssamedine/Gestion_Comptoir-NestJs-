import { Test, TestingModule } from '@nestjs/testing';
import { DetailsCommandesService } from './details-commandes.service';

describe('DetailsCommandesService', () => {
  let service: DetailsCommandesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsCommandesService],
    }).compile();

    service = module.get<DetailsCommandesService>(DetailsCommandesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
