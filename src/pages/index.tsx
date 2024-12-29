import Image from 'next/image';

import SocialLinks from '@/components/shared/SocialLinks';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.headline}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <Image
          src="/assets/press-kit/picture_2.jpeg"
          width={200}
          height={200}
          className="size-16 hover:size-20 mb-3 rounded-full bg-zinc-100 object-cover ring-white transition-all duration-300 dark:bg-zinc-800"
          alt="Profile Picture"
        />
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          {AppConfig.title} 🪴
        </h1>
        <h2 className="text-xl font-normal">{AppConfig.description}</h2>
      </div>
      <div className="space-y-3 text-base font-normal">
        <span role="img" aria-label="Hi">
          👋
        </span>{' '}
        Hey there! I&apos;m Salman, a tech enthusiast and entrepreneur from
        India 🇮🇳.
        <p>
          Coding, writing, and sharing knowledge are more than just
          hobbies—they&apos;re my passions. Whether it&apos;s building seamless
          experiences with JavaScript and Kotlin or sparking ideas within
          communities, I&apos;m all about making an impact.
        </p>
        <p>
          Beyond the screen, I&apos;m a storyteller at heart, an avid reader,
          and a music lover. I treasure the little things in life, like
          collecting souvenirs from my adventures or appreciating a well-crafted
          design that speaks to the soul.
        </p>
        <p>
          <em>
            Creating with purpose, traveling with wonder, and spreading peace
            one step at a time.
          </em>
        </p>
      </div>

      {/* <HomePageBlogSection /> */}
      <SocialLinks />
    </Main>
  );
};

export default Index;
