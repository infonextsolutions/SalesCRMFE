export default interface Lead {
  _id: string
  companyId: CompanyId
  customerId: CustomerId
  potential_deal_size: string
  win_probability: string
  created_by: string
  customer_name: string
  inquiry: string
  existing_budget: string
  leadStatus: string
  leadStage: string
  leadSource: string
  lead_createdAt?: string
  manager?: any
  updatedAt?: any
  lead_title: string
  lead_description: string
  product_category: string
  notes: Note[]
  source: string
  leadId: string
  owners: Owner[]
  activityId: any
  __v: number
}

export interface Activity {
  _id: string
  leadId: string
  __v: number
  createdAt: string
  history: History[]
  lastActivity: LastActivity
  updatedAt: string
}

export interface History {
  type: string
  title?: string
  content: string
  createdAt: string
  subject?: string
  leadId?: string
  companyName?: string
  clientPoc?: string
  email?: string
}

export interface LastActivity {
  type: string
  title: string
  content: string
  createdAt: string
}

export interface CompanyId {
  _id: string
  company_name: string
  company_website_url: string
  company_icon: string
  company_location: string
  company_product_category: string
  company_description: string
  industry_type: string
  company_address: string
  company_country: string
  company_state: string
  company_city: string
  company_socialMedia1: string
  company_socialMedia2: string
  company_socialMedia1Url: string
  company_socialMedia2Url: string
  product: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CustomerId {
  _id: string
  name: string
  contact: string
  email: string
  designation: string
  companyId: string
  parentId: string
  createdAt: string
  updatedAt: string
  customer_name: string
  customer_contact: string
  customer_email: string
  customer_designation: string
  customer_gender: string
  industry: string
  contacts: string[]
  customer_socialMedia1: string
  customer_socialMedia1Url: string
  customer_socialMedia2: string
  customer_socialMedia2Url: string
  __v: number
}

export interface Note {
  title: string
  content: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface Owner {
  _id: string
  name: string
  email: string
  password: string
  phone: string
  roles: string[]
  token: string
  createdAt: string
  updatedAt: string
  __v: number
  designation: string
}