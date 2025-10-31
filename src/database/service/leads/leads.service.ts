import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/wrappers/baseServiceCrudwrapper';
import { Lead } from 'src/database/entity/lead.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeadsService extends BaseService<Lead> {

    constructor(@InjectRepository(Lead) private readonly leadRepo: Repository<Lead>) {
        super(leadRepo);
    }

}
