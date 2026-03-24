import Link from 'next/link'
import { Container } from '@/components/layout/container'

export function CalculatorHighlight() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-[2rem] bg-zinc-900 px-8 py-10 text-white lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
              Ferramenta informativa
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight lg:text-4xl">
              Faça uma estimativa inicial do seu tempo de contribuição
            </h2>
            <p className="mt-5 max-w-2xl text-zinc-300">
              Organize seus períodos de trabalho e visualize, de forma preliminar,
              seu histórico previdenciário informado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/calculadora-previdenciaria"
    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950"
  >
    Iniciar cálculo
  </Link>
  <Link
    href="/calculadora-previdenciaria"
    className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white"
  >
    Entender como funciona
  </Link>
</div>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 text-zinc-900">
            <div className="mb-5 h-2 w-32 rounded-full bg-zinc-200" />
            <div className="grid gap-4">
              <div className="rounded-2xl bg-stone-100 p-4">
                <div className="h-3 w-28 rounded-full bg-zinc-200" />
                <div className="mt-3 h-10 rounded-xl bg-white" />
              </div>
              <div className="rounded-2xl bg-stone-100 p-4">
                <div className="h-3 w-36 rounded-full bg-zinc-200" />
                <div className="mt-3 h-10 rounded-xl bg-white" />
              </div>
              <div className="rounded-2xl bg-zinc-900 p-5 text-white">
                <p className="text-sm text-zinc-300">Tempo total estimado</p>
                <p className="mt-2 text-2xl font-semibold">28 anos, 7 meses e 14 dias</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}