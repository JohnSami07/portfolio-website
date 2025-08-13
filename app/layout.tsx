import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'John Sami - Portfolio',
  description: 'Personal portfolio website for John Sami — projects, resume, and contact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
