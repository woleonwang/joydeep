export interface IApiEndorsement {
  id: number;
  invite_id: number;
  user_id: number;
  endorser_name: string;
  title: string;
  company: string;
  identity: 1 | 2;
  status: number;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface IEndorsement {
  id: string;
  inviteId: number;
  username: string;
  jobTitle: string;
  endorsements: string;
  date: string;
  identity: 'candidate' | 'client';
  avatar: string;
}
