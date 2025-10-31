import { Injectable } from '@nestjs/common';
import { StepBase } from 'src/common/interfaces/stepbase';
import { HubspotExtractDeals } from '../steps/extract/hubspotExtract';
import { typeExtract } from 'src/common/enums/typeExtract';
import { HubsTransform } from '../steps/transform/hubsTransform';
import { LoadPostgresStep } from '../steps/load/load-postgres.step';


@Injectable()
export class PipelineFactoryService {
  constructor(private readonly loadPostgress:LoadPostgresStep ){

  }
  getPipeline(name: typeExtract): StepBase[] {
    const pipelines: Record<string, StepBase[]> = {
      [typeExtract.DEALS]: [
        new HubspotExtractDeals(),
        new HubsTransform(),
        this.loadPostgress
      ],
      [typeExtract.LEADS]: [
        new HubspotExtractDeals(),
        new HubsTransform(),
        this.loadPostgress
      ],
    };
    return pipelines[name] || null;
  }
}
