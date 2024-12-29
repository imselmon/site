import { format, parseISO } from 'date-fns';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RSSParser from 'rss-parser';

import PageHeader from '../components/shared/PageHeader';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

type Post = {
  title: string;
  link: string;
  description: string;
  date: string;
  slug: string;
};

function PostCard(post: Post) {
  return (
    <div className="group mb-10 space-x-3 space-y-1 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <time
        dateTime={post.date}
        className="mb-4 rounded-full font-mono text-xxs xl:text-xs"
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>

      <Link href={`${post.link}`} className="plain space-y-3 xl:col-span-3">
        <div className="rounded-lg xl:p-4 xl:hover:bg-gray-100 xl:dark:hover:bg-black">
          <h2 className="mb-1 text-xl font-normal text-gray-900 group-hover:text-primary dark:text-gray-100 dark:group-hover:text-primary">
            {post.title}
          </h2>
          <p className="text-base font-normal text-gray-500">
            {post.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <Main
      meta={
        <Meta
          title={`Blog | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <PageHeader
          title="Hear me out."
          emoji="📝"
          description="I write about life, business and philosophy."
        />

        <div className="mt-20">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const parser = new RSSParser();
  const feed = await parser.parseURL('https://imselmon.medium.com/feed');

  const posts = feed.items.map((item) => ({
    title: item.title || 'Untitled',
    link: item.link || '#',
    description: item.contentSnippet || '',
    date: item.isoDate || new Date().toISOString(),
    slug: item.link?.split('/').pop() || '',
  }));

  console.log(posts);
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
