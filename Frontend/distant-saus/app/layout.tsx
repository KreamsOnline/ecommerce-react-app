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



{/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div> */}