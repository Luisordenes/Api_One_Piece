import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://luisordenesavila_db_user:LaLO2qM8dOvzagpH@clusteronepiece.psx52x2.mongodb.net/?appName=ClusterOnePiece',
      ),
  },
];
