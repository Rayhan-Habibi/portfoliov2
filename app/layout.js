import './globals.css'
import Navigation from './components/Navigation'
import { Source_Sans_3 } from 'next/font/google'

const sSans = Source_Sans_3({subsets: ['latin']})

export const metadata = {
  title: 'Rayhan Portfolio',
  description: 'Rayhans Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="halloween" lang="en">
      <body className={`${sSans.className}`}>
        <Navigation />
        {children}
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </body>
    </html>
  )
}
