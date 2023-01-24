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
} from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Employes-Api')
@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEmployeDto: CreateEmployeDto, @UploadedFile() file) {
    console.log({ createEmployeDto, file });
    return this.employesService.create(createEmployeDto, file);
  }

  @Get()
  findAll() {
    return this.employesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employesService.update(id, updateEmployeDto);
  }

  @Delete(':bulk')
  removeBulk(@Body() deleted: DeleteMany) {
    return this.employesService.removeBulk(deleted);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employesService.remove(id);
  }

  @Post('recover/bulk')
  @HttpCode(200)
  recoverBulk(@Body() deleted: DeleteMany) {
    return this.employesService.recoverBulk(deleted);
  }

  @Post('recover')
  @HttpCode(200)
  recover(@Param('id') id: string) {
    return this.employesService.recover(id);
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image'))
  // async uploadFile(@UploadedFile() file) {
  //   const response = {
  //     originalname: file.originalname,
  //     filename: file.filename,
  //   };
  //   return response;
  // }

  @Get(':imgPath')
  uploadedFile(@Param('imgPath') image, @Res() res) {
    res.sendFile(image, { root: 'uploads' });
  }
}
