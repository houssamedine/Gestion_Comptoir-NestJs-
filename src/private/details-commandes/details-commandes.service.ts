import { Injectable } from '@nestjs/common';
import { CreateDetailsCommandeDto } from './dto/create-details-commande.dto';
import { UpdateDetailsCommandeDto } from './dto/update-details-commande.dto';

@Injectable()
export class DetailsCommandesService {
  create(createDetailsCommandeDto: CreateDetailsCommandeDto) {
    return 'This action adds a new detailsCommande';
  }

  findAll() {
    return `This action returns all detailsCommandes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailsCommande`;
  }

  update(id: number, updateDetailsCommandeDto: UpdateDetailsCommandeDto) {
    return `This action updates a #${id} detailsCommande`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailsCommande`;
  }
}
