import { format, parseISO } from 'date-fns';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import RSSParser from 'rss-parser';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { AppConfig } from '../../utils/AppConfig';

type Post = {
  title: string;
  link: string;
  content: string;
  date: string;
  slug: string;
};

type IBlogUrl = {
  slug: string;
};

type IPropType = {
  post: Post | undefined;
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { post } = props;

  if (!post) return <div>404</div>;

  return (
    <Main
      meta={
        <Meta
          title={`${post.title} | ${AppConfig.site_name}`}
          description={post.content.slice(0, 150)}
        />
      }
    >
      <div className="flex justify-between">
        <Link href="/blog" className="plain text-xs">
          ⬅️ Back
        </Link>
      </div>

      <h1 className="my-2 text-4xl font-bold text-gray-900 dark:text-gray-200">
        {post.title}
      </h1>

      <div className="mb-10 mt-3 flex items-center justify-between space-x-2">
        <time
          dateTime={post.date}
          className="block font-mono text-xs dark:text-gray-200"
        >
          ⏰ {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>

      <article className="prose w-full dark:prose-invert dark:text-gray-400"></article>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  const parser = new RSSParser();
  const feed = await parser.parseURL('https://imselmon.medium.com/feed');

  const paths = feed.items.map((item) => ({
    params: { slug: item.link?.split('/').pop() || '' },
  }));

  return {
    paths,
    fallback: false, // Change to 'blocking' if you want on-demand generation for new slugs
  };
};

export const getStaticProps: GetStaticProps<IPropType, IBlogUrl> = async ({
  params,
}) => {
  const parser = new RSSParser();
  const feed = await parser.parseURL('https://imselmon.medium.com/feed');

  console.log(feed.items);
  const post = feed.items
    .map((item) => ({
      title: item.title || 'Untitled',
      link: item.link || '#',
      content: item['content:encoded'] || '',
      date: item.isoDate || new Date().toISOString(),
      slug: item.link?.split('/').pop() || '',
    }))
    .find((item) => item.slug === params!.slug);

  return {
    props: {
      post,
    },
  };
};

export default Blog;
