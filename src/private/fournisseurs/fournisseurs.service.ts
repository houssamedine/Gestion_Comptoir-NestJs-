import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Fournisseur } from './entities/fournisseur.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FournisseursService {
  constructor(
    @InjectRepository(Fournisseur)
    private readonly repositoryFournisseur: Repository<Fournisseur>,
  ) {}

  //Add One Fournisseur
  async create(
    createFournisseurDto: CreateFournisseurDto,
  ): Promise<Fournisseur> {
    try {
      return await this.repositoryFournisseur.save(createFournisseurDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find All Fournisseurs
  async findAll(): Promise<Fournisseur[]> {
    try {
      return await this.repositoryFournisseur.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find One Fournisseur
  async findOne(id: string): Promise<Fournisseur> {
    try {
      return await this.repositoryFournisseur.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Update One Fournisseur
  async update(
    id: string,
    updateFournisseurDto: UpdateFournisseurDto,
  ): Promise<Fournisseur> {
    try {
      await this.findOne(id);
      const result = await this.repositoryFournisseur.update(
        id,
        updateFournisseurDto,
      );
      if (result.affected > 0) return this.findOne(id);
      else throw new InternalServerErrorException();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Delete One Fournisseur
  async remove(id: string): Promise<boolean> {
    try {
      const fournisseurId = await this.findOne(id);
      await this.repositoryFournisseur.softRemove(fournisseurId);
      return fournisseurId ? true : false;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
