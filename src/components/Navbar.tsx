'use client';

import { useState } from 'react';
import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';

import { DarkMode } from '@/components/DarkMode';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/datas/links';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="sticky z-50 flex items-center justify-between w-full py-4 font-amiko">
      <div className="flex items-center gap-4">
        <Link href={'/'} className="font-semibold textGradient">
          Wupxy.
        </Link>

        <div>
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} className="font-normal">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href={'https://github.com/muhamyusuf/Wupxy-Resources'}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
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
