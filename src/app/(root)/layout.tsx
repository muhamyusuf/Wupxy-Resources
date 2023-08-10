import '../globals.css';
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
          <div className="container px-2 md:px-8">
            <Navbar />

            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
