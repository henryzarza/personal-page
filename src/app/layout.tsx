import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Navbar, Footer } from '@/components';
import './globals.css';

const chubbo = localFont({
  src: './fonts/Chubbo/Chubbo-Variable.ttf',
  display: 'swap',
  variable: '--font-chubbo'
});

const gambetta = localFont({
  src: './fonts/Gambetta/Gambetta-Variable.ttf',
  display: 'swap',
  variable: '--font-gambetta'
});

export const metadata: Metadata = {
  title: {
    template: 'Henry Zarza | %s',
    default: 'Henry Zarza | Software Developer',
  },
  description: 'Hi, I am Henry Zarza a software developer from Medellín, Colombia.',
  authors: [{ name: 'Henry Zarza', url: 'https://www.linkedin.com/in/henryzarza/' }],
  creator: 'Henry Zarza',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F7F5' },
    { media: '(prefers-color-scheme: dark)', color: '#004643' },
  ],
  publisher: 'NextJS by Vercel',
  applicationName: 'Henry Zarza web page',
  keywords: ['JavaScript', 'Frontend Developer', 'Fullstack Developer', 'React', 'CSS', 'Angular', 'Creative coding']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${chubbo.variable} ${gambetta.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
