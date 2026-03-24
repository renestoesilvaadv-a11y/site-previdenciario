import { Container } from '@/components/layout/container'

const items = [
  {
    title: 'Atuação especializada',
    description:
      'Foco em direito previdenciário, com atenção técnica a aposentadorias, benefícios e revisões.',
  },
  {
    title: 'Atendimento personalizado',
    description:
      'Cada caso é examinado de forma individual, considerando histórico contributivo e documentação.',
  },
  {
    title: 'Orientação clara',
    description:
      'Comunicação objetiva, acessível e comprometida com segurança técnica.',
  },
]

export function AuthoritySection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-zinc-950">{item.title}</h2>
              <p className="mt-4 leading-7 text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}