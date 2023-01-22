import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {HttpException} from "@nestjs/common/exceptions";
import {DeleteMany} from "../../communs/generiques/delete_many";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {
    }

    //Add Multi Categories
    @Post('bulk')
    createBulk(@Body() createCategoryDto: CreateCategoryDto[]) {
        try {
            return this.categoriesService.createBulk(createCategoryDto);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Add One Categorie
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        try {
            return this.categoriesService.create(createCategoryDto);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Find All Categories
    @Get()
    findAll() {
        try {
            return this.categoriesService.findAll();
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Find One Categorie
    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.categoriesService.findOne(id);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Update One Categorie
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        try {
            return this.categoriesService.update(id, updateCategoryDto);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Delete Multi Categories
    @Delete(':bulk')
    removeBulk(@Body() deleted: DeleteMany) {
        try {
            return this.categoriesService.removeBulk(deleted);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Delete One Categorie
    @Delete(':id')
    remove(@Param('id') id: string) {
        try {
            return this.categoriesService.remove(id);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Recover One Categorie
    @Post('recover/bulk')
    @HttpCode(200)
    recoverBulk(@Body() deleted: DeleteMany) {
        try {
            return this.categoriesService.recoverBulk(deleted);
        } catch (e) {
            return new HttpException('', 404);
        }
    }

    //Recover One Categorie
    @Post('recover/:id')
    @HttpCode(200)
    recover(@Param('id') id: string) {
        try {
            return this.categoriesService.recover(id);
        } catch (e) {
            return new HttpException('', 404);
        }
    }
}
