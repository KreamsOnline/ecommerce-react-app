import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Header from './dashboard/header'
import Footer from './ui/homepage/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Distant Saus',
  description: 'Anime and Basketball Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav><Header /></nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


