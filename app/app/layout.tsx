import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'しま吉 | 京都西陣の焼き鳥屋',
  description: '京都市上京区・西陣にある炭火焼き鳥の小さなお店。素材にこだわった一串一串を、店主が心を込めて焼き上げます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
