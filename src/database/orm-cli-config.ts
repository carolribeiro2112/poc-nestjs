import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1706108627456 } from 'src/migrations/1706108627456-CreateCoursesTable';
import { CreateTagsTable1706127922642 } from 'src/migrations/1706127922642-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1706108627456, CreateTagsTable1706127922642],
});
