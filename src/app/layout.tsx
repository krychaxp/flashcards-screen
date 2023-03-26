'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

// import { Inter } from 'next/font/google';
import { SettingsProvider } from '@/hooks/useSettings';

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <SettingsProvider>{children}</SettingsProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
