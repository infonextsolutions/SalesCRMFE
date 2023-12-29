export default interface Root {
    _id: string
    Sid: string
    ParentCallSid: string
    DateCreated: string
    DateUpdated: string
    AccountSid: string
    To: string
    From: string
    PhoneNumberSid: string
    Status: string
    StartTime: string
    EndTime: string
    Duration: string
    Price: string
    Direction: string
    AnsweredBy: string
    ForwardedFrom: string
    CallerName: string
    Uri: string
    RecordingUrl: string
    leadId: LeadId
    questionnaire: any[]
    comments: any[]
    notes: any[]
    call_title:string;
    createdAt: string
    updatedAt: string
    transcriptId: any
  }
  
  export interface LeadId {
    _id: string
    companyId: string
    customerId: string
    potential_deal_size: string
    win_probability: string
    created_by: string
    customer_name: string
    inquiry: string
    existing_budget: string
    leadStatus: string
    leadStage: string
    lead_title: string
    lead_description: string
    notes: Note[]
    source: string
    leadId: string
    owners: string[]
    __v: number
    updatedAt: string
    createdAt: string
    scriptId: string
    callId: string
  }
  
  export interface Note {
    title: string
    content: string
    _id: string
    createdAt: string
    updatedAt: string
  }
  