import { Employe } from './../employes/entities/employe.entity';
import { DeleteMany } from 'src/communs/generiques/delete_many';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Fournisseur } from './entities/fournisseur.entity';
import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { In, Repository } from 'typeorm';

@Injectable()
export class FournisseursService {
  constructor(
    @InjectRepository(Fournisseur)
    private readonly repositoryFournisseur: Repository<Fournisseur>,
  ) {}

  //Add Multi Fournisseurs
  async createBulk(
    createFournisseurDto: CreateFournisseurDto[],
  ): Promise<Fournisseur[]> {
    try {
      return await this.repositoryFournisseur.save(createFournisseurDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

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

  //Delete Multi Fournisseurs
  async removeBulk(deleted: DeleteMany): Promise<boolean> {
    try {
      const fournisseurId = await this.repositoryFournisseur.find({
        where: { id: In(deleted.ids) },
        withDeleted: true,
      });
      await this.repositoryFournisseur.softRemove(fournisseurId);
      return fournisseurId ? true : false;
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

  //Recover One Fournisseur
  async recoverBulk(deleted: DeleteMany): Promise<Fournisseur[]> {
    try {
      const fournisseurId = await this.repositoryFournisseur.find({
        where: { id: In(deleted.ids) },
        withDeleted: true,
      });
      await this.repositoryFournisseur.recover(fournisseurId);
      return fournisseurId;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Recover One Fournisseur
  async recover(id: string): Promise<Fournisseur> {
    try {
      const fournisseurId = await this.repositoryFournisseur.findOne({
        where: { id },
        withDeleted: true,
      });
      await this.repositoryFournisseur.recover(fournisseurId);
      return fournisseurId;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
