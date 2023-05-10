export interface ActiveCall {
    _id: string;
    callId: string;
    call_title: string;
    leadId: LeadId;
    companyId: CompanyId;
    customerId: CustomerId;
    call_date: string;
    call_start_time: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface LeadId {
    _id: string;
    companyId: string;
    customerId: string;
    potential_deal_size: string;
    win_probability: string;
    created_by: string;
    customer_name: string;
    inquiry: string;
    existing_budget: string;
    leadStatus: string;
    leadStage: string;
    lead_title: string;
    lead_description: string;
    notes: Note[];
    source: string;
    leadId: string;
    owners: string[];
    __v: number;
  }
  
  export interface Note {
    title: string;
    content: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CompanyId {
    _id: string;
    company_name: string;
    company_website_url: string;
    company_icon: string;
    company_location: string;
    company_product_category: string;
    company_description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface CustomerId {
    _id: string;
    name: string;
    contact: string;
    email: string;
    parentId: string;
    designation: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }