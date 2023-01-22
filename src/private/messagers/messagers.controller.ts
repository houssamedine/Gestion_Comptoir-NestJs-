import { HttpException } from '@nestjs/common/exceptions';
import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, HttpCode,
} from '@nestjs/common';
import { MessagersService } from './messagers.service';
import { CreateMessagerDto } from './dto/create-messager.dto';
import { UpdateMessagerDto } from './dto/update-messager.dto';
import {DeleteMany} from "../../communs/generiques/delete_many";

@ApiTags('Messagers')
@Controller('messagers')
export class MessagersController {
  constructor(private readonly messagersService: MessagersService) {}

  //Add Multi Messages
  @Post('bulk')
  createBulk(@Body() createMessagerDto: CreateMessagerDto[]) {
    try {
      return this.messagersService.createBulk(createMessagerDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Add One Message
  @Post()
  create(@Body() createMessagerDto: CreateMessagerDto) {
    try {
      return this.messagersService.create(createMessagerDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find All Messages
  @Get()
  findAll() {
    try {
      return this.messagersService.findAll();
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find One Message
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.messagersService.findOne(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Update One Message
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMessagerDto: UpdateMessagerDto,
  ) {
    try {
      return this.messagersService.update(id, updateMessagerDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete Multi Messages
  @Delete(':bulk')
  removeBulk(@Body() deleted: DeleteMany) {
    try {
      return this.messagersService.removeBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete One Message
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.messagersService.remove(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover Multi Messages
  @Post(':recover/bulk')
  @HttpCode(200)
  recoverBulk(@Body() deleted: DeleteMany) {
    try {
      return this.messagersService.recoverBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover One Message
  @Post(':recover/:id')
  @HttpCode(200)
  recover(@Param('id') id: string) {
    try {
      return this.messagersService.recover(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }
}
