import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
export default config;
