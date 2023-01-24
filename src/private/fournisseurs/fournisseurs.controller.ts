import { DeleteMany } from 'src/communs/generiques/delete_many';
import { HttpException } from '@nestjs/common/exceptions';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Fournisseur-Api')
@Controller('fournisseurs')
export class FournisseursController {
  constructor(private readonly fournisseursService: FournisseursService) {}

  //Add Multi Fournisseurs
  @Post('bulk')
  createBulk(@Body() createFournisseurDto: CreateFournisseurDto[]) {
    try {
      return this.fournisseursService.createBulk(createFournisseurDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Add One Fournisseur
  @Post()
  create(@Body() createFournisseurDto: CreateFournisseurDto) {
    try {
      return this.fournisseursService.create(createFournisseurDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find All Fournisseurs
  @Get()
  findAll() {
    try {
      return this.fournisseursService.findAll();
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find One Fournisseur
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.fournisseursService.findOne(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Update One Fournisseur
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFournisseurDto: UpdateFournisseurDto,
  ) {
    try {
      return this.fournisseursService.update(id, updateFournisseurDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete Muleti Fournisseurs
  @Delete(':bulk')
  removeBulk(@Body() deleted: DeleteMany) {
    try {
      return this.fournisseursService.recoverBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete One Fournisseur
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.fournisseursService.remove(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover Multi Fournisseurs
  @Post('recover/bulk')
  @HttpCode(200)
  recoverBulk(@Body() deleted: DeleteMany) {
    try {
      return this.fournisseursService.recoverBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover One Fournisseur
  @Post('recover')
  @HttpCode(200)
  recover(@Param('id') id: string) {
    try {
      return this.fournisseursService.recover(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }
}
