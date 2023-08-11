import type { Metadata } from 'next';
import SideBar from '@/components/SideBar';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Resources for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      {/* <SideBar /> */}

      {children}
    </div>
  );
}
