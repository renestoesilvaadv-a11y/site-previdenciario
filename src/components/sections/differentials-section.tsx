import { Container } from '@/components/layout/container'

const differentials = [
  'Atendimento próximo e organizado',
  'Linguagem clara e acessível',
  'Especialização em direito previdenciário',
  'Estrutura digital para facilitar o atendimento',
  'Análise minuciosa do histórico contributivo',
  'Orientação técnica com discrição e sobriedade',
]

export function DifferentialsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Diferenciais
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
              Atuação pautada por técnica, clareza e atenção individual.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              A proposta do escritório é oferecer uma experiência jurídica organizada,
              segura e compreensível, sem ruído e sem excessos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-zinc-200 bg-white px-6 py-5 shadow-sm"
              >
                <p className="text-base font-medium text-zinc-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}