import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Affiliate Site',
  description: 'Simple affiliate marketing site'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. We add classes to the body to set the background image.
        2. `relative` is needed for the overlay to work correctly.
      */}
      <body 
        className="relative bg-[url('/Contemporary Logo in Orange and Navy Blue (1) (1).png')] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        {/* 3. This div is the dark overlay. It sits on top of the background
             but behind the content. bg-black/70 means 70% transparent black.
        */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* 4. This div holds your actual page content.
             `relative` and `z-10` ensure it sits on top of the overlay.
             We also make the text a light gray so it's readable.
        */}
        <main className="relative z-10 text-slate-200">
          {children}
        </main>
      </body>
    </html>
  );
}
