import { Module } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { BountiesController } from './bounties.controller';
import { DatabaseModule } from 'src/database/database.module';
import { bountiesProviders } from './bounties.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BountiesController],
  providers: [BountiesService, ...bountiesProviders],
})
export class BountiesModule {}
