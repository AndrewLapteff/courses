import { ClerkProvider } from '@clerk/nextjs'
import '../../styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
export const metadata: Metadata = {
  title: 'FreeUdemy',
  description: 'An application for learning',
}

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${inter.className} relative bg-black flex flex-col justify-center min-h-screen overflow-hidden`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
