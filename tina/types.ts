import { PageAndNavQuery, PostConnectionQuery } from '@/tina/__generated__/types';

export type PageResult = {
  data: PageAndNavQuery;
  variables: object;
  query: string;
};

export type PostResult = {
  data: PostConnectionQuery;
  variables: object;
  query: string;
};
