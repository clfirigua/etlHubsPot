import { typeExtract } from "src/common/enums/typeExtract";
import { IPropertiesLeads, IResultL, PropertiesDeals } from "src/common/interfaces/huspotResponse.interface";
import { StepBase, StepContext } from "src/common/interfaces/stepbase";
import { HubspotWrapper } from "src/common/wrappers/hubspot.wrapper";



export class HubspotExtractDeals implements StepBase {
    name: string = "HubspotExtractDeals";
    private hubsPorWrapper: HubspotWrapper = new HubspotWrapper();
    private context: StepContext<any, any>;
    private typeExtract:typeExtract

    constructor() {

    }
    async execute(context: StepContext<any, any>): Promise<StepContext> {
        this.context = context
        this.typeExtract = this.context.metadata.typeExtract
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

    private setErrorsOrData(data: IResultL<PropertiesDeals>[] | IResultL<IPropertiesLeads>[], type: typeExtract): void {
        this.context.metadata = {typeExtract:this.typeExtract}
        if (data.length !== 0) {
            this.context.data = data
        }
        this.context.errors?.push(`No se tienen ${type} para realizar el proceso de carga inicial`)
    }


}