import { Module } from '@nestjs/common';
import { PirateService } from './pirate.service';
import { PirateController } from './pirate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { piratesProviders } from './pirate.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PirateController],
  providers: [PirateService, ...piratesProviders],
})
export class PirateModule {}
