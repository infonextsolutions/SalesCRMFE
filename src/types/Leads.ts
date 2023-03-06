export interface CompanyId {
  _id: string;
  company_name: string;
  company_website_url: string;
  company_icon: string;
  company_location: string;
  company_product_category: string;
  company_description: string;
  __v: number;
}

export interface CustomerId {
  _id: string;
  name: string;
  contact: string;
  email: string;
  companyId: string;
  __v: number;
}

export interface TypeId {
  _id: string;
  type: string;
  code: string;
  value: string;
  tags: string;
  __v: number;
  parentId: string;
}

export default interface Lead{
  _id: string;
  companyId: CompanyId;
  customerId: CustomerId;
  typeId: TypeId;
  potential_deal_size: string;
  win_probability: string;
  created_by: string;
  last_updated_by: string;
  activity_history: string;
  document_attached: string;
  conversation_history: string;
  customer_name: string;
  inquiry: string;
  existing_budget: string;
  close_date: string;
  last_activity: string;
  leadStatus: string;
  leadStage: string;
  next_action: string;
  notes: string;
  source: string;
  __v: number;
}