import './globals.css'

import { Inter } from 'next/font/google'
import clsx from 'clsx'

import Header from '@/components/Header/Header'
import { CartContextProvider } from '@/context/cart.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Drone rental',
  description: 'Drone rental storefront',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen min-w-screen bg-light dark:bg-dark text-dark dark:text-light">
      <body className={clsx(inter.className, "h-full w-full flex flex-col justify-center items-center")}>
        <CartContextProvider>
          <Header className="sticky top-0 w-full"></Header>
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
