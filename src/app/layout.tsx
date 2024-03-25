import { Inter } from 'next/font/google'
import './globals.css'

import { Metadata } from 'next'
import ToastProvider from '@/providers/ToastProvider'
import NexAuthSessionProvider from '@/providers/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studiis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className}`}>
        <ToastProvider />
        <NexAuthSessionProvider>{children}</NexAuthSessionProvider>
      </body>
    </html>
  )
}
