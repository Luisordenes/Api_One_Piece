import { Connection } from 'mongoose';
import { PirateSchema } from './schemas/pirate.schema';

export const piratesProviders = [
  {
    provide: 'PIRATE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Pirate', PirateSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
