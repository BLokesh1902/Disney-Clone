import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'


export const metadata: Metadata = {
  title: 'Disney+ Clone',
  description: 'Streaming Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1C29] bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}
