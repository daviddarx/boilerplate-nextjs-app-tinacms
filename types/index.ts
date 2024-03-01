import {
  NavigationQuery,
  PageQuery,
  PostConnectionQuery,
  PostQuery,
} from '@/tina/__generated__/types';

export type NavigationResult = {
  data: NavigationQuery;
  variables: object;
  query: string;
};

export type PageResult = {
  data: PageQuery;
  variables: object;
  query: string;
};

export type PostsResult = {
  data: PostConnectionQuery;
  variables: object;
  query: string;
};

export type PostResult = {
  data: PostQuery;
  variables: object;
  query: string;
};

export type PostsFilter = {
  label: string;
  url: string;
  active: boolean;
};
