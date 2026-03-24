import Link from 'next/link'
import { Container } from '@/components/layout/container'

export function HeroSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        
        {/* TEXTO */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Advocacia Previdenciária
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-950 lg:text-6xl">
            Atuação estratégica em aposentadorias, benefícios do INSS e revisões.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Atendimento jurídico técnico, cuidadoso e personalizado para segurados
            que buscam segurança na análise de seus direitos previdenciários.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
  <Link
    href="/contato"
    className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white"
  >
    Agendar atendimento
  </Link>

  <Link
    href="/calculadora-previdenciaria"
    className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900"
  >
    Usar calculadora previdenciária
  </Link>
</div>
        </div>

        {/* BLOCO VISUAL */}
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div className="h-3 w-24 rounded-full bg-zinc-200" />
            <div className="h-10 w-full rounded-2xl bg-stone-100" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-24 rounded-2xl bg-stone-100" />
              <div className="h-24 rounded-2xl bg-stone-100" />
            </div>
            <div className="h-32 rounded-2xl bg-stone-100" />
          </div>
        </div>

      </Container>
    </section>
  )
}