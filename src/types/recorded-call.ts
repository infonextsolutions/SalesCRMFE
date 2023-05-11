export default interface Root {
  comments: any[]
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
  createdAt: string
  updatedAt: string
  notes: Note[]
  questionnaire: Questionnaire[]
  leadId: LeadId
}

export interface Note {
  title: string
  content: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface Questionnaire {
  question: string
  answerOptions: AnswerOptions
  answer: string
}

export interface AnswerOptions {
  a: string
  b: string
  c: string
  d: string
  e: string
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
  notes: Note2[]
  source: string
  leadId: string
  owners: string[]
  __v: number
  updatedAt: string
  createdAt: string
  scriptId: string
}

export interface Note2 {
  title: string
  content: string
  _id: string
  createdAt: string
  updatedAt: string
}
