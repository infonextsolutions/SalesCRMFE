import { CompanyId, CustomerId } from "./Leads";

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
  Metting_ID: number;
  participants: {
    name: string;
  };
  description: string;
  title: string;
  callParticipant: string;
  type: string;
  duration: string;
  location: string;
  call_type: string;
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
  Product_services: string;
  date_time: string;
}

export interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
