import { typeExtract } from "src/common/enums/typeExtract";
import { StepBase, StepContext } from "src/common/interfaces/stepbase";
import { HubspotWrapper } from "src/common/wrappers/hubspot.wrapper";



export class DealsTransform implements StepBase {
    name: string = "DealsTransform";
    private context: StepContext<any, any>;

    constructor(private readonly typeExtract: typeExtract) {

    }
    async execute(context: StepContext<any, any>): Promise<StepContext> {
       return context
    }



}