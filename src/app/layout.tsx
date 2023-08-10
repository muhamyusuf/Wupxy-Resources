import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers/Providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Wupxy Resources',
  description: 'Resources for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="container px-2 bg-white md:px-8 dark:bg-black">
            <Navbar />

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
