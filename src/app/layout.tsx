import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'SplitStar – Split Bills on Stellar', description: 'Divide costs and settle on-chain with Stellar' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Fraunces:wght@700;900&display=swap" rel="stylesheet" /></head>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif", background: '#f5f0e8', color: '#1a1a1a', margin: 0 }}>{children}</body>
    </html>
  )
}
