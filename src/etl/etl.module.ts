import { Module } from '@nestjs/common';
import { PipelineFactoryService } from './services/pipeline-factory.service';
import { EtlRunnerService } from './services/etl-runner.service';
import { EtlController } from './etl.controller';

@Module({
    providers:[PipelineFactoryService,EtlRunnerService],
    controllers: [EtlController]
})
export class EtlModule {}
