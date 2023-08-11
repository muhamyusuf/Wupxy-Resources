import type { Metadata } from 'next';
import './globals.css';

import Providers from '@/components/Providers/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Wupxy Resources', template: '%s | Wupxy' },
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

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
