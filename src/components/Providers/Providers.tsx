'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/Providers/ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

export default function Providers({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
