import Page from '@/components/app/page';
import client from '@/tina/__generated__/client';
import { CategoryFilter } from '@/tina/__generated__/types';
import { PageResult, PostsFilter } from '@/types/';
import { notFound } from 'next/navigation';

export const revalidate = 10;

export async function generateStaticParams() {
  const pageConnectionResult = await client.queries.pageConnection();
  const categoryConnectionResult = await client.queries.categoryConnection();

  const params = [{ slug: [''] }];

  await Promise.all(
    pageConnectionResult.data.pageConnection.edges!.map(async (edge) => {
      const fileName = edge!.node!._sys.filename;

      params.push({ slug: [fileName] });

      const pageResult = await client.queries.pageAndNav({
        relativePath: `${fileName}.mdx`,
      });

      const hasPostListBlock = pageResult.data.page.blocks?.some(
        (block) => block?.__typename === 'PageBlocksPostList',
      );

      if (hasPostListBlock) {
        categoryConnectionResult.data.categoryConnection.edges!.map((edge) => {
          params.push({ slug: [fileName, edge!.node!._sys.filename] });
        });
      }
    }),
  );

  return params;
}

export default async function ServerPage({ params }: { params: { slug?: string[] } }) {
  let pageResult: PageResult;
  let hasPostListBlock: boolean | undefined;
  let pageMdPath = params.slug ? params.slug[0] : 'home';

  try {
    pageResult = await client.queries.pageAndNav({
      relativePath: `${pageMdPath}.mdx`,
    });
    hasPostListBlock = pageResult.data.page.blocks?.some(
      (block) => block?.__typename === 'PageBlocksPostList',
    );
  } catch (error) {
    return notFound();
  }

  if (hasPostListBlock) {
    const categoryParams = params.slug![1];
    const categoryConnectionResult = await client.queries.categoryConnection();

    let postsFilters: PostsFilter[] = [
      {
        label: 'ALL',
        url: `/${pageMdPath}`,
        active: params.slug?.length === 1,
      },
    ];

    postsFilters = postsFilters.concat(
      categoryConnectionResult.data.categoryConnection.edges!.map((edge) => {
        const node = edge!.node!;
        return {
          label: node.title,
          url: `/${params.slug![0]}/${node._sys.filename}`,
          active: node._sys.filename === categoryParams,
        };
      }),
    );

    let postsCategoryQueryFilter: CategoryFilter = {};

    if (categoryParams) {
      postsCategoryQueryFilter = {
        title: {
          eq: categoryConnectionResult.data.categoryConnection.edges!.find(
            (edge) => edge?.node?._sys.filename === categoryParams,
          )?.node?.title,
        },
      };
    }

    const postsResult = await client.queries.postConnection({
      filter: { category: { category: postsCategoryQueryFilter } },
      sort: 'createdAt',
      last: 100,
    });

    return (
      <Page
        pageProps={{ ...pageResult! }}
        postsProps={{ ...postsResult }}
        filterProps={postsFilters}
      />
    );
  } else {
    return <Page pageProps={{ ...pageResult! }} />;
  }
}
