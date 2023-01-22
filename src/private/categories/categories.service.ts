import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {In, Repository} from "typeorm";
import {Category} from "./entities/category.entity";
import {InternalServerErrorException} from "@nestjs/common/exceptions";
import {DeleteMany} from "../../communs/generiques/delete_many";

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Category)
                private readonly repositoryCategorie:Repository<Category>) {
    }

    //Add Multi Categories
    async createBulk(createCategoryDto: CreateCategoryDto[]): Promise<Category[]> {
        try {
            return await this.repositoryCategorie.save(createCategoryDto);
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Add One Categorie
    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        try {
            return await this.repositoryCategorie.save(createCategoryDto);
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Find All Categories
    async findAll(): Promise<Category[]> {
        try {
            return await this.repositoryCategorie.find();
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Find One Categorie
    async findOne(id: string):Promise<Category> {
        try {
            return await this.repositoryCategorie.findOne({where:{id}});
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Update One Categorie
    async update(id: string, updateCategoryDto: UpdateCategoryDto):Promise<Category> {
        try {
            await this.findOne(id);
            const res=await this.repositoryCategorie.update(id,updateCategoryDto);
            if(res.affected>0)return this.findOne(id);
            else throw new InternalServerErrorException();
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Delete Multi Categories
    async removeBulk(deleted: DeleteMany):Promise<boolean> {
        try {
            const catId=await this.repositoryCategorie.find({where:{id:In(deleted.ids)}});
            await this.repositoryCategorie.softRemove(catId);
            return catId.length>0 ? true : false;
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Delete One Categorie
    async remove(id: string):Promise<boolean> {
        try {
            const catId=await this.findOne(id);
            await this.repositoryCategorie.softRemove(catId);
            return catId ? true : false;
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Recover One Categorie
    async recoverBulk(deleted: DeleteMany):Promise<Category[]> {
        try {
            const catId=await this.repositoryCategorie.find({where:{id:In(deleted.ids)},withDeleted:true,});
            await this.repositoryCategorie.recover(catId);
            return catId;
        } catch (e) {
            throw new NotFoundException();
        }
    }

    //Recover One Categorie
    async recover(id: string):Promise<Category> {
        try {
            const catId=await this.repositoryCategorie.findOne({where:{id},withDeleted:true,});
            await this.repositoryCategorie.recover(catId);
            return catId;
        } catch (e) {
            throw new NotFoundException();
        }
    }
}
