import { Injectable } from '@nestjs/common';
import { StepBase } from 'src/common/interfaces/stepbase';
import { HubspotExtractDeals } from '../steps/extract/hubspotExtract';
import { typeExtract } from 'src/common/enums/typeExtract';
import { HubsTransform } from '../steps/transform/hubsTransform';


@Injectable()
export class PipelineFactoryService {
  getPipeline(name: typeExtract): StepBase[] {
    const pipelines: Record<string, StepBase[]> = {
      "DEALS": [
        new HubspotExtractDeals(),
        new HubsTransform()
      ],
      "LEADS": [
        new HubspotExtractDeals(),
        new HubsTransform()
      ],
    };
    return pipelines[name] || null;
  }
}
