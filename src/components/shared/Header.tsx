import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  isExact?: boolean;
}
const NavLink = ({ href, isExact, children, ...props }: NavLinkProps) => {
  const router = useRouter();
  const isActive = isExact
    ? router.asPath === href
    : router.asPath.includes(href.toString());
  return (
    <Link
      {...props}
      target={
        typeof href === 'string' && href.startsWith('http')
          ? '_blank'
          : undefined
      }
      href={href}
      className={clsx(
        'plain relative block p-2 px-3 text-sm transition ',
        isActive
          ? 'text-primary'
          : 'hover:text-gray-500 dark:hover:text-gray-400'
      )}
    >
      {children}
      {isActive && (
        <span className="from-primary/0 via-primary/40 dark:from-primary/0 dark:via-primary/40 dark:to-primary/0 absolute inset-x-1 -bottom-px h-px bg-gradient-to-r to-teal-500/0"></span>
      )}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-center">
        <nav>
          <ul className="my-5 flex flex-wrap items-center justify-center rounded-full bg-white/90 px-2 text-sm font-normal text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <li>
              <NavLink isExact href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/uses">Uses</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
