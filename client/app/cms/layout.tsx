'use client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col flex-1 min-w-[680px] ">
      {children}
    </div>
  )
}
