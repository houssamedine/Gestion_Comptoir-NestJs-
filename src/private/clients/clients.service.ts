import { Injectable } from '@nestjs/common';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly repositoryClient: Repository<Client>,
  ) {}

  //Create One Client
  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      return await this.repositoryClient.save(createClientDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findAll(): Promise<Client[]> {
    try {
      return await this.repositoryClient.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string): Promise<Client> {
    try {
      return await this.repositoryClient.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    try {
      await this.findOne(id);
      const result = await this.repositoryClient.update(id, updateClientDto);
      if (result.affected > 0) return await this.findOne(id);
      else throw new InternalServerErrorException();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      const roleId = await this.findOne(id);
      await this.repositoryClient.softRemove(roleId);
      return roleId ? true : false;
    } catch (e) {
      throw new NotFoundException();
    }
  }
  async recover(id: string): Promise<Client> {
    try {
      const clientId = await this.repositoryClient.findOne({
        where: { id },
        withDeleted: true,
      });
      await this.repositoryClient.recover(clientId);
      return clientId;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
