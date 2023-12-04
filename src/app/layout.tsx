import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

import '@/styles/global/global.css';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Solution Papiers',
  description: 'Powered by ESO Automation'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <script async type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
