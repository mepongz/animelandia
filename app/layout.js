import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/template/navigation'
import SearchBar from './components/searchbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animelandia',
  description: 'Stream all day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation></Navigation>
        <SearchBar></SearchBar>
        {children}
      </body>
    </html>
  )
}
