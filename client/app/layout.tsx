import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/theme.css'
import Header from '@/components/header'
import SideBar from '@/components/sidebar'

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
      <body className="h-screen w-screen ">
        <div className="flex bg-[var(--c-bg-b0)] h-full">
          <div className="relative flex h-full w-full text-[var(--c-text-t3)] bg-no-repeat bg-cover bg-[url(https://p-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/test.png)] bg-[var(--c-bg-b0)] ">
            <SideBar />
            <main className="flex flex-col flex-1 ">
              <Header />
              <div className="main-container mt-[var(--h-header)] text-[var(--c-text-t1)] ">
                {children}
              </div>
            </main>
          </div>
        </div>
        <div>
        </div>
      </body>
    </html>
  )
}
