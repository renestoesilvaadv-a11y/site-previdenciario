import Link from 'next/link'
import { Container } from './container'

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-stone-50">
      <Container className="flex h-20 items-center justify-between">
        <div className="text-lg font-semibold tracking-wide text-zinc-900">
          Escritório Previdenciário
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-700 md:flex">
          <Link href="/">Início</Link>
          <Link href="/escritorio">Escritório</Link>
          <Link href="/areas-de-atuacao">Áreas</Link>
          <Link href="/calculadora-previdenciaria">Calculadora</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <Link
          href="/contato"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          Agendar atendimento
        </Link>
      </Container>
    </header>
  )
}