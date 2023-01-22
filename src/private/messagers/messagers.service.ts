import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessagerDto } from './dto/create-messager.dto';
import { UpdateMessagerDto } from './dto/update-messager.dto';

@Injectable()
export class MessagersService {
  //Add One Message
  create(createMessagerDto: CreateMessagerDto) {
    try {
      return 'This action adds a new messager';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find All Messages
  findAll() {
    try {
      return 'This action adds a new messager';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Find One Message
  findOne(id: number) {
    try {
      return 'This action adds a new messager';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Update One Message
  update(id: number, updateMessagerDto: UpdateMessagerDto) {
    try {
      return 'This action adds a new messager';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //Delete One Message
  remove(id: number) {
    try {
      return 'This action adds a new messager';
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
