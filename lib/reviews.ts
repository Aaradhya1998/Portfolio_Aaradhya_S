export interface ReviewItem {
  name: string;
  role: string;
  message: string;
  linkedin_url?: string;
  profileUrl?: string;
  organization?: string;
}

export const initialReviews: ReviewItem[] = [];
