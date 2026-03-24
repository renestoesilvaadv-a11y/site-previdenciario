'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'

const faqItems = [
  {
    question: 'Como saber se já tenho tempo para me aposentar?',
    answer:
      'A análise depende do histórico contributivo completo, incluindo vínculos, contribuições e eventuais períodos especiais, rurais ou concomitantes.',
  },
  {
    question: 'O CNIS mostra todas as contribuições corretamente?',
    answer:
      'Nem sempre. É comum existirem inconsistências ou ausências de informação que exigem verificação técnica e documental.',
  },
  {
    question: 'Atividade especial entra na contagem?',
    answer:
      'Pode entrar, desde que exista enquadramento legal e documentação adequada para análise do período informado.',
  },
  {
    question: 'O atendimento pode ser realizado on-line?',
    answer:
      'Sim. O atendimento pode ser realizado de forma digital, com organização de documentos e comunicação por canais adequados.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20">
      <Container className="max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Dúvidas frequentes
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
            Perguntas comuns em matéria previdenciária.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-zinc-200 bg-stone-50 px-6 py-5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-medium text-zinc-950">
                    {item.question}
                  </span>

                  <span className="text-zinc-500">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}