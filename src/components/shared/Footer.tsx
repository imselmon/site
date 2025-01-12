import Link from 'next/link';
import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="flex flex-col items-center justify-center gap-3 p-2">
        <ul className="flex items-center gap-5 text-center">
          <li>
            <Link
              className="plain text-xs text-gray-400 dark:text-gray-600"
              href="/press-kit"
            >
              Press Kit
            </Link>
          </li>
          <li>
            <Link
              className="plain text-xs text-gray-400 dark:text-gray-600"
              href="https://developers.google.com/profile/u/imselmon"
              target="_blank"
            >
              Developer Profile
            </Link>
          </li>
          <li>
            <Link
              className="plain text-xs text-gray-400 dark:text-gray-600"
              href="/tracker"
            >
              Contribution Tracker
            </Link>
          </li>

          {/* <li> */}
          {/*  <Link */}
          {/*    className="plain text-xs text-gray-400 dark:text-gray-600" */}
          {/*    href="/projects" */}
          {/*  > */}
          {/*    Projects */}
          {/*  </Link> */}
          {/* </li> */}
        </ul>

        <p className="inline font-mono text-xs text-gray-400 dark:text-gray-600">
          Copyright &copy; {new Date().getFullYear()} {AppConfig.site_name}
        </p>
      </div>
    </footer>
  );
}
