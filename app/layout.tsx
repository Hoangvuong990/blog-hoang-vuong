import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Hoàng Vương - Lập trình mạng',
  description: 'Chia sẻ kiến thức về lập trình Java và JavaScript từ Đinh Hoàng Vương',
  keywords: 'lập trình, Java, JavaScript, web development, blog',
  authors: [{ name: 'Đinh Hoàng Vương' }],
  openGraph: {
    title: 'Blog Hoàng Vương - Lập trình mạng',
    description: 'Chia sẻ kiến thức về lập trình Java và JavaScript',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
