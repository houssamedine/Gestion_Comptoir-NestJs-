import { Client } from './../../../private/clients/entities/client.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Messager } from '../../../private/messagers/entities/messager.entity';
import { Fournisseur } from 'src/private/fournisseurs/entities/fournisseur.entity';
import { Category } from 'src/private/categories/entities/category.entity';
@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const type = this.configService.get('DB.PROVIDER');
    const host = this.configService.get('DB.HOST');
    const port = this.configService.get('DB.PORT');
    const username = this.configService.get('DB.USERNAME');
    const password = this.configService.get('DB.PASSWORD');
    const database = this.configService.get('DB.NAME_DB');

    return {
      type,
      host,
      port,
      username,
      password,
      database,
      entities: [Client, Messager, Fournisseur, Category],
      synchronize: true,
    };
  }
}
