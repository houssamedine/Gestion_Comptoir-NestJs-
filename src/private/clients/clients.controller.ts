import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DeleteMany } from 'src/communs/generiques/delete_many';

@ApiTags('clients')
@Controller('clients')
@UseInterceptors(ClassSerializerInterceptor)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  //Add Multi Clients
  @Post('bulk')
  createBulk(@Body() createClientDto: CreateClientDto[]) {
    try {
      return this.clientsService.createBulk(createClientDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Add One Client
  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    try {
      return this.clientsService.create(createClientDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find All Clients
  @Get()
  findAll() {
    try {
      return this.clientsService.findAll();
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find One Client
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.clientsService.findOne(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Update One Client
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      return this.clientsService.update(id, updateClientDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete Multi Client
  @Delete(':bulk')
  @HttpCode(200)
  removeBulk(@Body() deleted: DeleteMany) {
    try {
      return this.clientsService.removeBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete One Client
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.clientsService.remove(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover Multi Client
  @Post('recover/bulk')
  @HttpCode(200)
  recoverBulk(@Body() deleted: DeleteMany) {
    try {
      return this.clientsService.recoverBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover One Client
  @Post('recover/:id')
  @HttpCode(200)
  recover(@Param('id') id: string) {
    try {
      return this.clientsService.recover(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }
}
