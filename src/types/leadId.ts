export interface LeadId {
    _id: string;
    companyId: CompanyId;
    customerId: CustomerId;
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
    owners: Owner[];
    manager?: string;
    __v: number;
  }
  
  export interface CompanyId {
    _id: string;
    company_name: string;
    company_website_url: string;
    company_icon: string;
    company_location: string;
    linkedin_url:string;
    twitter_url:string;
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
    gender:string;
    designation: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Note {
    title: string;
    content: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Owner {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    roles: string[];
    token: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    designation: string;
  }