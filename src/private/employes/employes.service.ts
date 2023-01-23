import { Employe } from './entities/employe.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EmployesService {
  constructor(
    @InjectRepository(Employe)
    private readonly repositoryEmploye: Repository<Employe>,
  ) {}

  async create(
    createEmployeDto: CreateEmployeDto,
    file: Express.Multer.File,
  ): Promise<Employe> {
    try {
      const { originalname: namephoto, filename: photo } = file;
      return await this.repositoryEmploye.save({
        ...createEmployeDto,
        // date_embauche: new Date(createEmployeDto.date_embauche),
        photo,
        namephoto,
      });
    } catch (error) {
      console.log({ error });
      throw new NotFoundException();
    }
  }

  findAll() {
    return `This action returns all employes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} employe`;
  }

  update(id: string, updateEmployeDto: UpdateEmployeDto) {
    return `This action updates a #${id} employe`;
  }

  remove(id: string) {
    return `This action removes a #${id} employe`;
  }
}
