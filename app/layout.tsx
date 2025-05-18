import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PayGo Finance",
  description: "Redirecting to PayGo Finance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=https://paygo-finance.vercel.app/" />
        <link rel="canonical" href="https://paygo-finance.vercel.app/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
