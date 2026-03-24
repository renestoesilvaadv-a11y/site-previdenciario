import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'

const areas = [
  {
    title: 'Aposentadorias',
    description:
      'Análise de requisitos, tempo de contribuição e regras aplicáveis ao caso concreto.',
  },
  {
    title: 'Benefícios por incapacidade',
    description:
      'Atuação em questões relacionadas à incapacidade temporária ou permanente para o trabalho.',
  },
  {
    title: 'BPC/LOAS',
    description:
      'Orientação sobre benefício assistencial, renda familiar e documentação necessária.',
  },
  {
    title: 'Pensão por morte',
    description:
      'Avaliação de dependência, qualidade de segurado e requisitos previdenciários.',
  },
  {
    title: 'Revisões de benefício',
    description:
      'Exame técnico de benefícios concedidos para identificação de possíveis inconsistências.',
  },
  {
    title: 'Planejamento previdenciário',
    description:
      'Estudo estratégico do histórico contributivo para organização de cenários de aposentadoria.',
  },
]

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Áreas de atuação
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
              Atuação previdenciária com foco técnico e análise individualizada.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              O escritório atua em demandas previdenciárias com atenção às
              particularidades de cada segurado, sempre com clareza, organização
              e responsabilidade técnica.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.title}
                className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-zinc-950">
                  {area.title}
                </h2>
                <p className="mt-4 leading-7 text-zinc-600">{area.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}