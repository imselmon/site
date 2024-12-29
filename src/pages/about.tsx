import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import PageHeader from '../components/shared/PageHeader';

const About = () => (
  <Main
    meta={
      <Meta
        title={`About me | ${AppConfig.title}`}
        description={AppConfig.description}
      />
    }
  >
    <div className="pb-8 pt-16">
      <PageHeader title="About Me" emoji="💡" />
      {/* <h2 className="text-xl">{AppConfig.description}</h2> */}
    </div>
    <div className="space-y-3 text-base font-normal">
      <p>
        I&apos;m Salman Shaikh, a technology entrepreneur from India 🇮🇳,
        specializing in JavaScript Fullstack, Firebase, Kotlin, and Product
        Development. I am the Founder of{' '}
        <a href="https://scattr.io" target="_blank">
          Scattr.io
        </a>{' '}
        and{' '}
        <a href="#" target="_blank">
          Triplist
        </a>
        .
      </p>
      <p>
        Over the past 3 years, I&apos;ve been actively contributing to developer
        communities like Google Developer Groups, Kotlin, and KaiOS. My journey
        in tech has revolved around building scalable products using JavaScript
        and TypeScript ecosystems, driven by my passion for solving real-world
        problems.
      </p>
      <p>
        I love traveling and exploring new places, especially those involving
        adventure and nature. I enjoy reading books, listening to music, and
        mentoring developers.
      </p>
    </div>
    <div className="mt-10">
      <h3 className="font-bold text-primary">Currently Working on</h3>
      <ul className="mt-3 flex flex-col space-y-4">
        <li>
          <h4 className="text-base font-normal">
            <a href="#" className="plain" target="_blank">
              Triplist
            </a>
          </h4>
          <p className="text-sm font-normal">
            A platform simplifying tour and trek organization, providing tools
            like custom landing pages and marketing poster generation.
          </p>
        </li>
      </ul>
    </div>
  </Main>
);

export default About;
