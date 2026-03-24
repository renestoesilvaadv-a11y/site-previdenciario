import Link from 'next/link'
import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold text-zinc-900">
            Escritório Previdenciário
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Advocacia previdenciária com atuação técnica e personalizada.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-900">Navegação</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
            <Link href="/">Início</Link>
            <Link href="/escritorio">Escritório</Link>
            <Link href="/areas-de-atuacao">Áreas de atuação</Link>
            <Link href="/calculadora-previdenciaria">Calculadora</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-900">Contato</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-600">
            <p>(00) 00000-0000</p>
            <p>contato@seuescritorio.com.br</p>
            <p>Atendimento presencial e on-line</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}