import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'animate.css/animate.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ithan Flores - Portafolio',
  description: 'Mi portafolio personal es un lugar donde podrás ver mi formación profesional, habilidades como programador, proyectos y medios de contacto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
