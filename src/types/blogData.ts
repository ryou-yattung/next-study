type MicroCMS<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogData = {
  id: number;
  name: string;
  genre: string;
  developers: string;
  publishers: string;
  reviseDAT: string;
  title: string;
  favorite: boolean;
  body: string;
};

export type MicroCMSBlogData = MicroCMS<BlogData>;
