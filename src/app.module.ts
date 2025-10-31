import { Module } from '@nestjs/common';
import { EtlModule } from './etl/etl.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EtlModule,
    DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
