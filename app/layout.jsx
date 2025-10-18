import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Affiliate Site',
  description: 'Simple affiliate marketing site'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">AffiSite</Link>
            <nav className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t mt-12 py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} AffiSite</footer>
      </body>
    </html>
  )
}
