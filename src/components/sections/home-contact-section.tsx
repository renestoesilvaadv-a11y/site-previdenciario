import Link from 'next/link'
import { Container } from '@/components/layout/container'

export function HomeContactSection() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <Container className="text-center max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Contato
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight lg:text-4xl">
          Precisa de orientação previdenciária?
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Entre em contato para análise do seu caso. O atendimento é realizado de
          forma técnica, organizada e com atenção individual às particularidades
          de cada situação.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contato"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
          >
            Ir para contato
          </Link>
        </div>
      </Container>
    </section>
  )
}