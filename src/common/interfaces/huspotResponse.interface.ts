export interface IHubspotResponse<TResultL> {
    total:   number;
    results: TResultL[];
}

export interface IResultL<TProperties> {
    id:         string;
    properties: TProperties
    createdAt:  Date;
    updatedAt:  Date;
    archived:   boolean;
    url:        string;
}

export interface IPropertiesLeads {
    createdate:       Date;
    email:            string;
    firstname:        string;
    hs_object_id:     string;
    lastmodifieddate: Date;
    lastname:         string;
    lifecyclestage:   string;
}

export interface PropertiesDeals {
    amount:              string;
    closedate:           Date;
    createdate:          Date;
    dealname:            string;
    dealstage:           string;
    hs_lastmodifieddate: Date;
    hs_object_id:        string;
    pipeline:            string;
}


export interface Icreate<TPropierties> {
    properties: TPropierties;
}

export interface IpropertiesCreateDeal {
    dealname:  string;
    amount:    string;
    pipeline:  string;
    dealstage: string;
    closedate: Date;
}

export interface IpropertiesCreateLead {
    email:          string;
    firstname:      string;
    lastname:       string;
    lifecyclestage: string;
}



export interface IcreateDealsResponse {
    amount:                                      string;
    amount_in_home_currency:                     string;
    closedate:                                   Date;
    createdate:                                  Date;
    days_to_close:                               string;
    dealname:                                    string;
    dealstage:                                   string;
    hs_actual_duration:                          string;
    hs_closed_amount:                            string;
    hs_closed_amount_in_home_currency:           string;
    hs_closed_deal_close_date:                   string;
    hs_closed_deal_create_date:                  string;
    hs_closed_won_count:                         string;
    hs_createdate:                               Date;
    hs_days_to_close_raw:                        string;
    hs_deal_stage_probability_shadow:            string;
    hs_forecast_amount:                          string;
    hs_is_closed:                                string;
    hs_is_closed_count:                          string;
    hs_is_closed_lost:                           string;
    hs_is_closed_won:                            string;
    hs_is_deal_split:                            string;
    hs_is_open_count:                            string;
    hs_lastmodifieddate:                         Date;
    hs_num_associated_active_deal_registrations: string;
    hs_num_associated_deal_registrations:        string;
    hs_num_associated_deal_splits:               string;
    hs_num_of_associated_line_items:             string;
    hs_num_target_accounts:                      string;
    hs_number_of_call_engagements:               string;
    hs_number_of_inbound_calls:                  string;
    hs_number_of_outbound_calls:                 string;
    hs_number_of_overdue_tasks:                  string;
    hs_object_id:                                string;
    hs_object_source:                            string;
    hs_object_source_id:                         string;
    hs_object_source_label:                      string;
    hs_open_amount_in_home_currency:             string;
    hs_open_deal_create_date:                    string;
    hs_projected_amount:                         string;
    hs_projected_amount_in_home_currency:        string;
    hs_v2_date_entered_current_stage:            Date;
    hs_v2_time_in_current_stage:                 Date;
    num_associated_contacts:                     string;
    num_notes:                                   string;
    pipeline:                                    string;
}


export interface IcreateLeadResponse {
    createdate:                                   Date;
    email:                                        string;
    firstname:                                    string;
    hs_all_contact_vids:                          string;
    hs_associated_target_accounts:                string;
    hs_currently_enrolled_in_prospecting_agent:   string;
    hs_email_domain:                              string;
    hs_full_name_or_email:                        string;
    hs_is_contact:                                string;
    hs_is_unworked:                               string;
    hs_lifecyclestage_lead_date:                  string;
    hs_membership_has_accessed_private_content:   string;
    hs_object_id:                                 string;
    hs_object_source:                             string;
    hs_object_source_id:                          string;
    hs_object_source_label:                       string;
    hs_pipeline:                                  string;
    hs_prospecting_agent_actively_enrolled_count: string;
    hs_prospecting_agent_total_enrolled_count:    string;
    hs_registered_member:                         string;
    hs_sequences_actively_enrolled_count:         string;
    lastmodifieddate:                             Date;
    lastname:                                     string;
    lifecyclestage:                               string;
    num_notes:                                    string;
}
