
export interface FeedbackCreateData {
  type: string,
  comment: string,
  screenshot?: string;  
}
export interface FeedbackFindData {
   id: string
    type: string,
  comment: string,
  screenshot?: string; 
  created_at: Date
}
 

export interface FeedbackRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
export interface FeedbackRepositoryFind {
  find: (data: FeedbackFindData) => Promise<FeedbackFindData>;
}
 