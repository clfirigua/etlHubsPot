import { typeExtract } from "src/common/enums/typeExtract";
import { MapperDatos } from "src/common/helpers/mapperDatos";
import { StepBase, StepContext } from "src/common/interfaces/stepbase";
import { DealTypes, LeadTypes } from "src/common/types/data-types";



export class HubsTransform implements StepBase {
    name: string = "HubsTransform";
    private context: StepContext<any, any>;

    constructor() { }
    async execute(context: StepContext<any, any>): Promise<StepContext> {
        this.context = context
        this.TransformData()
        context.metadata.typeExtract == typeExtract.LEADS ? this.TransformLead() : this.TransformDeal()
        return context
    }

    private TransformDeal(): void {
        this.context.data = this.context.data.map(element => MapperDatos(element, DealTypes))
    }
    private TransformLead(): void {
        this.context.data = this.context.data.map(element => MapperDatos(element, LeadTypes))
    }

    private TransformData = () => {
        this.context.data = this.context.data.map(data => {
            const { properties, ...rest } = data
            return { ...rest, ...properties, month: rest.createdAt, year: rest.createdAt }
        });
    }



}


