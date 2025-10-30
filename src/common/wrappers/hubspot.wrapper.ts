import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { AxiosWrapper } from "./axios.wrapper";
import { envs } from "src/config/env";
import { buildLeadSearchBody } from "../helpers/hubspot.helper";
import { IpropertiesCreateDeal, IcreateDealsResponse, IHubspotResponse, IPropertiesLeads, IResultL, PropertiesDeals, IpropertiesCreateLead, IcreateLeadResponse } from "../interfaces/huspotResponse.interface";

export interface IHubspotWrapper {
    getAllLeads(): Promise<IResultL<IPropertiesLeads>[]>,
    getAllDeals(): Promise<IResultL<PropertiesDeals>[]>,
    PostCreateDeales(deal: IpropertiesCreateDeal): Promise<IResultL<IcreateDealsResponse>>
    PostCreteLeads(lead: IpropertiesCreateLead): Promise<IResultL<IcreateLeadResponse>>
}

export class HubspotWrapper implements IHubspotWrapper {

    private readonly logger = new Logger(HubspotWrapper.name);
    private readonly baseUrl: string = "https://api.hubapi.com/crm/v3/";
    private readonly hubspotToken: string = envs.tokenHubsPot;
    private readonly axiosWrapper: AxiosWrapper = new AxiosWrapper(this.baseUrl, this.hubspotToken)

    constructor() { }


    async getAllLeads(): Promise<IResultL<IPropertiesLeads>[]> {
        try {
            const response = await this.axiosWrapper.post<IHubspotResponse<IResultL<IPropertiesLeads>>>('objects/contacts/search', buildLeadSearchBody);
            return response.results
        } catch (error) {
            this.logger.error("HubspotWrapper.getAllLeads", error)
            return []
        }
    }

    async PostCreteLeads(lead: IpropertiesCreateLead): Promise<IResultL<IcreateLeadResponse>> {
        try {
            return await this.axiosWrapper.post<IResultL<IcreateLeadResponse>>('objects/deals', { properties: lead });
        } catch (error) {
            this.logger.error("HubspotWrapper.PostCreteLeads", error)
            throw error
        }
    }

    async getAllDeals(): Promise<IResultL<PropertiesDeals>[]> {
        try {
            const response = await this.axiosWrapper.post<IHubspotResponse<IResultL<PropertiesDeals>>>('objects/deals');
            return response.results
        } catch (error) {
            this.logger.error("HubspotWrapper.getAllDeals", error)
            return []
        }
    }

    async PostCreateDeales(deal: IpropertiesCreateDeal): Promise<IResultL<IcreateDealsResponse>> {
        try {
            return await this.axiosWrapper.post<IResultL<IcreateDealsResponse>>('objects/deals', { properties: deal });
        } catch (error) {
            this.logger.error("HubspotWrapper.PostCreateDeales", error)
            throw error
        }
    }



}
