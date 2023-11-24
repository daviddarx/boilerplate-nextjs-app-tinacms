import { PageQuery } from '@/tina/__generated__/types';

export function PageComponent(props: {
  data: PageQuery;
  variables: { relativePath: string };
  query: string;
}) {
  return <div>Je suis une page {props.data.page.title}</div>;
}
