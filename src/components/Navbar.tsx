'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { DarkMode } from '@/components/DarkMode';
import { HomeIcon } from '@radix-ui/react-icons';
import { BsGithub } from 'react-icons/bs';
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { icons } from 'react-icons';

const navLinks = [
  {
    name: 'Components',
    href: '/components',
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="sticky z-50 flex items-center justify-between w-full py-4 font-amiko">
      <div className="flex items-center gap-4">
        <Link href={'/'} className="font-semibold textGradient">
          Wupxy.
        </Link>

        {navLinks.map((link, index) => (
          <Link href={link.href} key={index} className="font-normal">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link
          href={'#github'}
          className={cn(
            buttonVariants({ variant: 'link', size: 'icon' }),
            'text-xl',
          )}
        >
          <BsGithub />
        </Link>

        <DarkMode />
      </div>
    </nav>
  );
}
