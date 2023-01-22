import { Injectable } from '@nestjs/common';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteMany } from 'src/communs/generiques/delete_many';
import { In, Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly repositoryClient: Repository<Client>,
  ) {}

  //Add Multi Clients
  async createBulk(createClientDto: CreateClientDto[]): Promise<Client[]> {
    try {
      return await this.repositoryClient.save(createClientDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Add One Client
  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      return await this.repositoryClient.save(createClientDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find All Clients
  async findAll(): Promise<Client[]> {
    try {
      return await this.repositoryClient.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find One Client
  async findOne(id: string): Promise<Client> {
    try {
      return await this.repositoryClient.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Update One Client
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

  //Delete Multi Clients
  async removeBulk(deleted: DeleteMany): Promise<boolean> {
    try {
      const roleId = await this.repositoryClient.find({
        where: { id: In(deleted.ids) },
      });
      await this.repositoryClient.softRemove(roleId);
      return roleId.length > 0 ? true : false;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  //Delete One Client
  async remove(id: string): Promise<boolean> {
    try {
      const roleId = await this.findOne(id);
      await this.repositoryClient.softRemove(roleId);
      return roleId ? true : false;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  //Recover Multi Client
  async recoverBulk(deleted: DeleteMany): Promise<Client[]> {
    try {
      const roleId = await this.repositoryClient.find({
        where: { id: In(deleted.ids) },
        withDeleted: true,
      });
      await this.repositoryClient.recover(roleId);
      return roleId;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  //Recover One Client
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
