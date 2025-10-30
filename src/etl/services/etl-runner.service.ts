import { Injectable, Logger } from '@nestjs/common';
import { PipelineFactoryService } from './pipeline-factory.service';
import { StepContext } from 'src/common/interfaces/stepbase';
import { typeExtract } from 'src/common/enums/typeExtract';

@Injectable()
export class EtlRunnerService {
  private readonly logger = new Logger(EtlRunnerService.name);

  constructor(private readonly pipelineFactory: PipelineFactoryService) {}

  async runPipeline(pipelineName: typeExtract) {
    const pipeline = this.pipelineFactory.getPipeline(pipelineName);
    if (!pipeline) throw new Error(`Pipeline not found: ${pipelineName}`);

    let context: StepContext = {
      metadata: { startedAt: new Date(), typeExtract:pipelineName},
      data: []
    };

    this.logger.log(`🚀 Starting pipeline: ${pipelineName}`);
    for (const step of pipeline) {
      this.logger.log(`➡️ Executing step: ${step.name}`);
      context = await step.execute(context);
      console.log("🚀 ~ EtlRunnerService ~ runPipeline ~ context:", context)
    }

    this.logger.log(`✅ Finished pipeline: ${pipelineName}`);
    return context;
  }
}
