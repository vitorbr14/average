export interface Article {
  id: string;
  title: string;
  content: string;
  preview: null | string;
  createdAt: Date;
  users: User[];
}

export interface User {
  userId: string;
  articleId: string;
}
