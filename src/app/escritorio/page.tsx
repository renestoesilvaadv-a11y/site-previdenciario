import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'

export default function ContatoPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contato
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
              Entre em contato para orientação jurídica ou análise individual do caso.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Preencha o formulário ao lado e envie sua mensagem. Os dados informados
              serão utilizados exclusivamente para retorno de contato e tratamento da
              solicitação apresentada.
            </p>

            <div className="mt-10 space-y-5 text-zinc-600">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                  Telefone
                </p>
                <p className="mt-1">(00) 00000-0000</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                  E-mail
                </p>
                <p className="mt-1">contato@seuescritorio.com.br</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                  Atendimento
                </p>
                <p className="mt-1">Presencial e on-line</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Telefone"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Descreva sua solicitação"
                  rows={5}
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-zinc-600">
                <input type="checkbox" className="mt-1" />
                <span>
                  Autorizo o uso dos dados informados para retorno de contato e
                  tratamento da solicitação apresentada.
                </span>
              </label>

              <button
                type="submit"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  )
}