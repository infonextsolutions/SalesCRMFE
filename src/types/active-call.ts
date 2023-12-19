import Lead, { CompanyId, CustomerId } from "./Leads";

export interface ActiveCall {
  _id: string;
  callId: string;
  call_title: string;
  leadId: Lead;
  companyId: CompanyId;
  customerId: CustomerId;
  allocatedOwner: any;
  call_date: string;
  call_start_time: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  Metting_ID: number;
  participants: {
    name: string;
  };
  invite: string[];
  datetime: any;
  description: string;
  title: string;
  callParticipant: string;
  type: string;
  duration: string;
  location: string;
  call_type: string;
}

export interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
