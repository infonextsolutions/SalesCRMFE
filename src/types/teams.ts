export default interface Root {
  _id: string;
  callerId: string;
  openDeals: number;
  openDealsRs: number;
  closeDeals: number;
  closeDealsRs: number;
  dealsWon: number;
  dealsLost: number;
  dealsDead: number;
  stageEnquery: number;
  lastActivity: string;
  lastLeadClose: string;
  callReted: number;
  totalFeedBacks: number;
  feedback: string[];
  lastFeedBack: string;
  warningsInOpenLeads: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  user: User[];
}

export interface User {
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
