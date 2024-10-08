import {cn} from '@/lib/utils';
import './globals.css';
import {Inter as FontSans} from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import {ReactQueryProvider} from './react-query-provider';
import toast, {Toaster} from 'react-hot-toast';
import Script from 'next/script';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <html lang='en'>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <main className='min-h-screen flex flex-col items-center'>
            <NextTopLoader />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster />
          </main>
        </body>
      </html>
    </>
  );
}
