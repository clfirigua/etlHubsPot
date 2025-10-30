import { typeExtract } from "src/common/enums/typeExtract";
import { StepBase, StepContext } from "src/common/interfaces/stepbase";
import { HubspotWrapper } from "src/common/wrappers/hubspot.wrapper";



export class HubspotExtractDeals implements StepBase {
    name: string = "HubspotExtractDeals";
    private hubsPorWrapper: HubspotWrapper = new HubspotWrapper();
    private context: StepContext<any, any>;

    constructor(private readonly typeExtract: typeExtract) {

    }
    async execute(context: StepContext<any, any>): Promise<StepContext> {
        this.context = context
        return this.typeExtract === typeExtract.LEADS ? this.extractLeads() : this.extracrDeals()
    }

    private async extractLeads(): Promise<StepContext> {
        const data = await this.hubsPorWrapper.getAllLeads();
        this.setErrorsOrData(data, this.typeExtract)
        return this.context
    }

    private async extracrDeals(): Promise<StepContext> {
        const data = await this.hubsPorWrapper.getAllDeals();
        this.setErrorsOrData(data, this.typeExtract)
        return this.context
    }

    private setErrorsOrData(data: any, type: typeExtract): void {
        if (data.length !== 0) {
            this.context.data = data
        }
        this.context.errors?.push(`No se tienen ${type} para realizar el proceso de carga inicial`)
    }


}