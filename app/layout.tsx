import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './shared/components/navbar/navbar'
import RegisterModal from './shared/modals/register'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}</body>
    </html>
  )
}
