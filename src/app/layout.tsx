import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navbar, Footer } from '@/components';

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
  title: 'Henry Zarza | Software Developer',
  description: 'Hi, I am Henry Zarza a system engineer from Medellín, Colombia.',
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
