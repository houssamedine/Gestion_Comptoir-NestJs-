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

@ApiTags('clients')
@Controller('clients')
@UseInterceptors(ClassSerializerInterceptor)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    try {
      return this.clientsService.create(createClientDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  @Get()
  findAll() {
    try {
      return this.clientsService.findAll();
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.clientsService.findOne(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      return this.clientsService.update(id, updateClientDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.clientsService.remove(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

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
