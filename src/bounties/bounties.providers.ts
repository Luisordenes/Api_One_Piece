import { Connection } from 'mongoose';
import { BountySchema } from './schemas/bounty.schema';

export const bountiesProviders = [
  {
    provide: 'BOUNTY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Bounty', BountySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
