import './globals.css'

import { Inter } from 'next/font/google'
import clsx from 'clsx'

import Header from '@/components/Header/Header'

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
        <Header className="sticky top-0 w-full"></Header>
        <main className="w-full max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  )
}
