import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/theme.css'

export const metadata: Metadata = {
  title: '抖音 APP ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <div className="flex bg-[var(--color-bg-b0) bg-top bg-cover]">
          <div className="bg-home"></div>
          <div className="relative">
            {children}
          </div>
        </div>
        <div>

        </div>
      </body>
    </html>
  )
}
