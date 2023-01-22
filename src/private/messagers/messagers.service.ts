import {Messager} from './entities/messager.entity';
import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateMessagerDto} from './dto/create-messager.dto';
import {UpdateMessagerDto} from './dto/update-messager.dto';
import {In, Repository} from 'typeorm';
import {InternalServerErrorException} from "@nestjs/common/exceptions";
import {DeleteMany} from "../../communs/generiques/delete_many";

@Injectable()
export class MessagersService {
    constructor(
        @InjectRepository(Messager)
        private readonly repositoryMessager: Repository<Messager>,
    ) {
    }

    //Add Multi Messages
    async createBulk(createMessagerDto: CreateMessagerDto[]): Promise<Messager[]> {
        try {
            return await this.repositoryMessager.save(createMessagerDto);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Add One Message
    async create(createMessagerDto: CreateMessagerDto): Promise<Messager> {
        try {
            return await this.repositoryMessager.save(createMessagerDto);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Find All Messages
    async findAll(): Promise<Messager[]> {
        try {
            return await this.repositoryMessager.find();
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Find One Message
    async findOne(id: string): Promise<Messager> {
        try {
            return await this.repositoryMessager.findOne({where: {id}});
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Update One Message
    async update(id: string, updateMessagerDto: UpdateMessagerDto): Promise<Messager> {
        try {
            await this.findOne(id);
            const result = await this.repositoryMessager.update(id, updateMessagerDto);
            if (result.affected > 0) return this.findOne(id);
            else throw new InternalServerErrorException();
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Delete Multi Messages
    async removeBulk(deleted: DeleteMany): Promise<boolean> {
        try {
            const messageId = await this.repositoryMessager.find({where: {id: In(deleted.ids)}});
            await this.repositoryMessager.softRemove(messageId);
            return messageId.length > 0 ? true : false;
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Delete One Message
    async remove(id: string): Promise<boolean> {
        try {
            const messageId = await this.findOne(id);
            await this.repositoryMessager.softRemove(messageId);
            return messageId ? true : false;
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Recover Multi Messages
    async recoverBulk(deleted: DeleteMany): Promise<Messager[]> {
        try {
            const messageId = await this.repositoryMessager.find(
                {
                    where: {id: In(deleted.ids)},
                    withDeleted: true,
                });
            await this.repositoryMessager.recover(messageId);
            return messageId;
        } catch (error) {
            throw new NotFoundException();
        }
    }

    //Recover One Message
    async recover(id: string): Promise<Messager> {
        try {
            const messageId = await this.repositoryMessager.findOne({
                where: { id },
                withDeleted: true,
            });
            await this.repositoryMessager.recover(messageId);
            return messageId;
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
