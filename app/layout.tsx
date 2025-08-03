import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Ruchi Shoes",
  description: "Created by Nawaz Wariya",
  icons: '/logo.png',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
