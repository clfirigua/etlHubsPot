import { Module } from '@nestjs/common';
import { EtlModule } from './etl/etl.module';
import { DatabaseModule } from './database/database.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [EtlModule, DatabaseModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
