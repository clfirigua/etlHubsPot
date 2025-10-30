import { Controller, Post } from '@nestjs/common';
import { EtlRunnerService } from './services/etl-runner.service';
import { typeExtract } from 'src/common/enums/typeExtract';

@Controller('etl')
export class EtlController {
    constructor(private readonly runnerService:EtlRunnerService){

    }
    @Post()
    generateRips() {
        this.runnerService.runPipeline(typeExtract.DEALS)
        
    }
}
