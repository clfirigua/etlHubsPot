import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/wrappers/baseServiceCrudwrapper';
import { Deal } from 'src/database/entity/deal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealsService  extends BaseService<Deal> {

    constructor(@InjectRepository(Deal) private readonly leadRepo: Repository<Deal>) {
        super(leadRepo);
    }

}
