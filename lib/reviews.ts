export interface ReviewItem {
  name: string;
  role: string;
  message: string;
  profileUrl?: string;
  organization?: string;
}

export const initialReviews: ReviewItem[] = [];
