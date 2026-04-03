import { Module } from '@nestjs/common';
import { PiratesService } from './pirates.service';
import { PiratesController } from './pirates.controller';
import { DatabaseModule } from 'src/database/database.module';
import { piratesProviders } from './pirates.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PiratesController],
  providers: [PiratesService, ...piratesProviders],
})
export class PiratesModule {}
