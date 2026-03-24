import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Escritório Previdenciário',
  description:
    'Advocacia previdenciária com atuação em aposentadorias, benefícios do INSS e revisões.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}