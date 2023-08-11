import Link from 'next/link';

import { sectionsLinks, uiLinks } from '@/datas/links';

interface SideBarProps {
  component: string;
}

export default function SideBar({ component }: SideBarProps) {
  return (
    <aside className="md:max-w-[300px]">
      <div className="flex gap-8 overflow-scroll md:flex-col md:overflow-hidden">
        {component === 'UI Elements' && (
          <>
            {uiLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="font-normal rounded-md"
              >
                <h3>{link.name}</h3>
              </Link>
            ))}
          </>
        )}
        {component === 'Sections' && (
          <>
            {sectionsLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="font-normal rounded-md"
              >
                <h3>{link.name}</h3>
              </Link>
            ))}
          </>
        )}
      </div>
    </aside>
  );
}
