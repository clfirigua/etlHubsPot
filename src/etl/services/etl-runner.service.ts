import { Injectable, Logger } from '@nestjs/common';
import { PipelineFactoryService } from './pipeline-factory.service';
import { StepContext } from 'src/common/interfaces/stepbase';
import { typeExtract } from 'src/common/enums/typeExtract';
import { Cron, CronExpression } from '@nestjs/schedule';
import { envs } from 'src/config/env';

@Injectable()
export class EtlRunnerService {
  private readonly logger = new Logger(EtlRunnerService.name);

  constructor(private readonly pipelineFactory: PipelineFactoryService) { }

  @Cron(envs.scrapingCron || CronExpression.EVERY_10_MINUTES)
  async runPipelineJob() {
    await Promise.all([
      this.runPipeline(typeExtract.DEALS),
      this.runPipeline(typeExtract.LEADS),
    ]);
  }

  async runPipeline(pipelineName: typeExtract) {
    try {
      const pipeline = this.pipelineFactory.getPipeline(pipelineName);
      if (!pipeline) throw new Error(`Pipeline not found: ${pipelineName}`);

      let context: StepContext = {
        metadata: { startedAt: new Date(), typeExtract: pipelineName },
        data: []
      };

      this.logger.log(`✅ Init pipeline: ${pipelineName}`);
      for (const step of pipeline) {
        this.logger.log(`➡️ Executing step: ${step.name}`);
        context = await step.execute(context);
      }
      this.logger.log(`✅ Finished pipeline: ${pipelineName}`);
      return context;
    } catch (error) {
      return null
    }

  }
}
