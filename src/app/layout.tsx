import './globals.css';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
