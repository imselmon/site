import React from 'react';

import Title from '../ui/Title';

const LINKS = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/imselmon',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/imselmon/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/imselmon/',
  },
  {
    name: 'Threads',
    url: 'https://www.threads.net/imselmon/',
  },
  {
    name: 'Peerlist',
    url: 'https://peerlist.io/imselmon/',
  },
];
export default function PKSocialLinks() {
  return (
    <>
      <div>
        <Title title="🔗 Social Links" level={3} className="text-3xl" />
        <p>Here are my social links that you can use to mention me or tag me</p>
      </div>
      <ul className="flex flex-col gap-3">
        {LINKS.map((link) => (
          <li key={link.url} className="group">
            <p className="font-bold">{link.name}</p>
            <p className="flex items-center justify-between">
              <a
                target="_blank"
                className="plain font-mono text-sm"
                href={link.url}
              >
                {link.url}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
