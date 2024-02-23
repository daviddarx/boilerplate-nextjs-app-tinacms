import { PageAndNavQuery, PostAndNavQuery, PostConnectionQuery } from '@/tina/__generated__/types';

export type PageResult = {
  data: PageAndNavQuery;
  variables: object;
  query: string;
};

export type PostsResult = {
  data: PostConnectionQuery;
  variables: object;
  query: string;
};

export type PostResult = {
  data: PostAndNavQuery;
  variables: object;
  query: string;
};

export type PostsFilter = {
  label: string;
  url: string;
  active: boolean;
};
