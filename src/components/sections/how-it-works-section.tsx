import { Container } from '@/components/layout/container'

const steps = [
  {
    number: '01',
    title: 'Contato inicial',
    description:
      'Recebimento das informações iniciais e compreensão do contexto apresentado pelo segurado.',
  },
  {
    number: '02',
    title: 'Análise preliminar',
    description:
      'Avaliação inicial do histórico contributivo e identificação dos principais pontos de atenção.',
  },
  {
    number: '03',
    title: 'Orientação jurídica',
    description:
      'Esclarecimento técnico sobre documentação, requisitos e estratégia aplicável ao caso.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description:
      'Condução cuidadosa das etapas necessárias, conforme a natureza da demanda previdenciária.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Como funciona o atendimento
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
            Um processo claro, organizado e pautado por análise individual.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.75rem] border border-zinc-200 bg-stone-50 p-7"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}