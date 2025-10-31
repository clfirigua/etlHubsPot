import { Module } from '@nestjs/common';
import { PipelineFactoryService } from './services/pipeline-factory.service';
import { EtlRunnerService } from './services/etl-runner.service';
import { LoadPostgresStep } from './steps/load/load-postgres.step';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports:[DatabaseModule],
    providers:[PipelineFactoryService,EtlRunnerService,LoadPostgresStep],
    controllers: []
})
export class EtlModule {}
