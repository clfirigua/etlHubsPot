import { Injectable } from "@nestjs/common";
import { typeExtract } from "src/common/enums/typeExtract";
import { StepBase, StepContext } from "src/common/interfaces/stepbase";
import { DealsService } from "src/database/service/deals/deals.service";
import { LeadsService } from "src/database/service/leads/leads.service";

@Injectable()
export class LoadPostgresStep implements StepBase {
    name = 'LoadPostgresStep';
    private context: StepContext<any, any>;


    constructor(
        private readonly leadsService: LeadsService,
        private readonly dealsService: DealsService

    ) { }
    async execute(context: StepContext<any, any>): Promise<StepContext> {
        this.context = context
        context.metadata.typeExtract == typeExtract.LEADS ? await this.savedLeads() : await this.savedDeals()
        return context
    }

    async savedLeads() {
        this.leadsService.saveMany(this.context.data)
    }

    async savedDeals() {
        this.dealsService.saveMany(this.context.data)
    }
}