import { Inter } from 'next/font/google'
import './globals.css'
import { APP_DESCRIPTION, APP_KEYWORDS, APP_NAME } from './data/consfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${APP_NAME} - Home`,
  description: `${APP_DESCRIPTION}`,
  keywords: APP_KEYWORDS,
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
