import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PiratesModule } from './pirates/pirates.module';
import { BountiesModule } from './bounties/bounties.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PiratesModule,
    BountiesModule,
    DatabaseModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
