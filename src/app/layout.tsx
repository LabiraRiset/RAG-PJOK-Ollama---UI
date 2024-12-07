import { Sidebar } from '@/components/sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RAGBuddy V2',
  description: 'Start Chatting With RAGBuddy V2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Sidebar />
        <main className='mx-5 mt-16 sm:ml-[300px] sm:mt-3'>{children}</main>
      </body>
    </html>
  );
}
