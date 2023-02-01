import { HttpException } from '@nestjs/common/exceptions';
import { DeleteMany } from 'src/communs/generiques/delete_many';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  HttpCode,
  UploadedFiles,
} from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Employes-Api')
@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  createBulk(
    @Body() createEmployeDto: CreateEmployeDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log({ createEmployeDto, files });
    return this.employesService.createBulk(createEmployeDto, files);
  }

  //Add One Employée
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEmployeDto: CreateEmployeDto, @UploadedFile() file) {
    console.log({ createEmployeDto, file });
    return this.employesService.create(createEmployeDto, file);
  }

  //Find All Employées
  @Get()
  findAll() {
    try {
      return this.employesService.findAll();
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Find One Employée
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.employesService.findOne(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Update One Employée
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    try {
      return this.employesService.update(id, updateEmployeDto);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete Multi Employées
  @Delete(':bulk')
  removeBulk(@Body() deleted: DeleteMany) {
    try {
      return this.employesService.removeBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Delete One Employée
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.employesService.remove(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover Multi Employées
  @Post('recover/bulk')
  @HttpCode(200)
  recoverBulk(@Body() deleted: DeleteMany) {
    try {
      return this.employesService.recoverBulk(deleted);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Recover One Employée
  @Post('recover')
  @HttpCode(200)
  recover(@Param('id') id: string) {
    try {
      return this.employesService.recover(id);
    } catch (error) {
      return new HttpException('', 404);
    }
  }

  //Upload Image in './Upload' file
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  //Recuprer Image
  @Get(':imgPath')
  uploadedFile(@Param('imgPath') image, @Res() res) {
    res.sendFile(image, { root: 'uploads' });
  }
}
