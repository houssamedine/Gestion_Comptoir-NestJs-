import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagersService } from './messagers.service';
import { CreateMessagerDto } from './dto/create-messager.dto';
import { UpdateMessagerDto } from './dto/update-messager.dto';

@Controller('messagers')
export class MessagersController {
  constructor(private readonly messagersService: MessagersService) {}

  @Post()
  create(@Body() createMessagerDto: CreateMessagerDto) {
    return this.messagersService.create(createMessagerDto);
  }

  @Get()
  findAll() {
    return this.messagersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessagerDto: UpdateMessagerDto) {
    return this.messagersService.update(+id, updateMessagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagersService.remove(+id);
  }
}
