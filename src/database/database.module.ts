import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeBd } from 'src/common/constants/config';
import { envs } from 'src/config/env';
import { Deal } from './entity/deal.entity';
import { Lead } from './entity/lead.entity';
import { LeadsService } from './service/leads/leads.service';
import { DealsService } from './service/deals/deals.service';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: typeBd,
      host: envs.hostPg,
      port: envs.portPg,
      username: envs.userNamePg,
      password: envs.passwordPg,
      database: envs.databasePg,
      entities: [Deal,Lead],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Lead, Deal]),
  ],
    providers: [LeadsService, DealsService],
    exports:[LeadsService, DealsService]
})
export class DatabaseModule {}
