import { DeleteMany } from 'src/communs/generiques/delete_many';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Employe } from './entities/employe.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { In, Repository } from 'typeorm';

@Injectable()
export class EmployesService {
  constructor(
    @InjectRepository(Employe)
    private readonly repositoryEmploye: Repository<Employe>,
  ) {}

  //Add and Upload Multi Image
  createBulk(
    createEmployeDto: CreateEmployeDto,
    files: Array<Express.Multer.File>,
  ): Promise<Employe> {
    try {
      const medias = files.map(
        ({ originalname: namephoto, filename: photo }) => ({
          namephoto,
          photo,
        }),
      );

      return this.repositoryEmploye.save({
        ...createEmployeDto,
        medias,
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Add One Employée
  create(
    createEmployeDto: CreateEmployeDto,
    file: Express.Multer.File,
  ): Promise<Employe> {
    try {
      const { originalname: namephoto, filename: photo } = file;
      return this.repositoryEmploye.save({
        ...createEmployeDto,
        //date_embauche: new Date(createEmployeDto.date_embauche),
        photo,
        namephoto,
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find All Employées
  async findAll(): Promise<Employe[]> {
    try {
      return this.repositoryEmploye.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find One Employée
  async findOne(id: string): Promise<Employe> {
    try {
      return this.repositoryEmploye.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Update One Employée
  async update(
    id: string,
    updateEmployeDto: UpdateEmployeDto,
  ): Promise<Employe> {
    try {
      await this.findOne(id);
      const result = await this.update(id, updateEmployeDto);
      if (result) return this.findOne(id);
      else throw new InternalServerErrorException();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Delete Multi Employées
  async removeBulk(deleted: DeleteMany): Promise<boolean> {
    try {
      const employeId = await this.repositoryEmploye.find({
        where: { id: In(deleted.ids) },
        withDeleted: true,
      });
      await this.repositoryEmploye.softRemove(employeId);
      return employeId.length > 0 ? true : false;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Delete One Employée
  async remove(id: string): Promise<boolean> {
    try {
      const employeId = await this.findOne(id);
      await this.repositoryEmploye.softRemove(employeId);
      return employeId ? true : false;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Recover Multi Employées
  async recoverBulk(deleted: DeleteMany): Promise<Employe[]> {
    try {
      const employeId = await this.repositoryEmploye.find({
        where: { id: In(deleted.ids) },
        withDeleted: true,
      });
      await this.repositoryEmploye.recover(employeId);
      return employeId;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Recover One Employée
  async recover(id: string): Promise<Employe> {
    try {
      const employeId = await this.repositoryEmploye.findOne({
        where: { id },
        withDeleted: true,
      });
      await this.repositoryEmploye.recover(employeId);
      return employeId;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
