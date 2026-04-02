import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PirateModule } from './pirate/pirate.module';
import { BountyModule } from './bounty/bounty.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PirateModule, BountyModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
