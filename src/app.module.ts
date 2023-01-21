import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './communs/config/database/database.service';
import { rateLimiterConfig } from './communs/rate-limiter/rate-limiter';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [
    //Configuration Variables .ENV
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // PrivateModule,
    // PublicModule,

    //Rate-Limeter
    RateLimiterModule.register(rateLimiterConfig),

    //Configuration Base-Donnée
    //Base Donnée
    TypeOrmModule.forRootAsync({ useClass: DatabaseService }),

    PrivateModule,

    PublicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
