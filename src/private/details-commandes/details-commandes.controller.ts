import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DetailsCommandesService } from './details-commandes.service';
import { CreateDetailsCommandeDto } from './dto/create-details-commande.dto';
import { UpdateDetailsCommandeDto } from './dto/update-details-commande.dto';
@ApiTags('Deatil_Commande')
@Controller('details-commandes')
export class DetailsCommandesController {
  constructor(
    private readonly detailsCommandesService: DetailsCommandesService,
  ) {}

  @Post()
  create(@Body() createDetailsCommandeDto: CreateDetailsCommandeDto) {
    return this.detailsCommandesService.create(createDetailsCommandeDto);
  }

  @Get()
  findAll() {
    return this.detailsCommandesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailsCommandesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetailsCommandeDto: UpdateDetailsCommandeDto,
  ) {
    return this.detailsCommandesService.update(+id, updateDetailsCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailsCommandesService.remove(+id);
  }
}
