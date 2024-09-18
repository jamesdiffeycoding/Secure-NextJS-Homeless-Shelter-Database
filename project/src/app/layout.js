import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./babycomponents/Header"
import Footer from "./babycomponents/Footer"
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shelter App',
  description: 'Helping you to manage your shelter guest information',
  icons: {
    icon: '../favicon.ico', // /public path
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        {children}
        <Toaster />
        <Footer />
        </main>
              
      </body>
    </html>
  )
}
