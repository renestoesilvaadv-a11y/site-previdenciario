'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Container } from '@/components/layout/container'

type Periodo = {
  id: number
  inicio: string
  fim: string
  categoria: string
}

export default function CalculadoraPage() {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [periodos, setPeriodos] = useState<Periodo[]>([
    { id: 1, inicio: '', fim: '', categoria: 'clt' },
  ])
  const [resultado, setResultado] = useState('')

  function adicionarPeriodo() {
    setPeriodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        inicio: '',
        fim: '',
        categoria: 'clt',
      },
    ])
  }

  function atualizarPeriodo(id: number, campo: keyof Periodo, valor: string) {
    setPeriodos((prev) =>
      prev.map((periodo) =>
        periodo.id === id ? { ...periodo, [campo]: valor } : periodo
      )
    )
  }

  function calcularTempo() {
    let totalDias = 0

    for (const periodo of periodos) {
      if (!periodo.inicio || !periodo.fim) continue

      const inicio = new Date(periodo.inicio)
      const fim = new Date(periodo.fim)

      const diff = (fim.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)

      if (diff > 0) {
        totalDias += diff
      }
    }

    const anos = Math.floor(totalDias / 365)
    const meses = Math.floor((totalDias % 365) / 30)
    const dias = Math.floor((totalDias % 365) % 30)

    setResultado(`${anos} anos, ${meses} meses e ${dias} dias`)
  }

  return (
    <>
      <Header />

      <main className="py-20">
        <Container className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Calculadora Previdenciária
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-zinc-950 lg:text-4xl">
            Estimativa inicial do tempo de contribuição
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Esta ferramenta permite uma estimativa inicial do tempo de contribuição
            com base nas informações inseridas pelo usuário.
          </p>

          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
              />

              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
              />
            </div>

            <div className="mt-8 space-y-5">
              {periodos.map((periodo) => (
                <div
                  key={periodo.id}
                  className="grid gap-4 rounded-[1.5rem] border border-zinc-200 p-5 md:grid-cols-3"
                >
                  <input
                    type="date"
                    value={periodo.inicio}
                    onChange={(e) =>
                      atualizarPeriodo(periodo.id, 'inicio', e.target.value)
                    }
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                  />

                  <input
                    type="date"
                    value={periodo.fim}
                    onChange={(e) =>
                      atualizarPeriodo(periodo.id, 'fim', e.target.value)
                    }
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                  />

                  <select
                    value={periodo.categoria}
                    onChange={(e) =>
                      atualizarPeriodo(periodo.id, 'categoria', e.target.value)
                    }
                    className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none"
                  >
                    <option value="clt">CLT</option>
                    <option value="autonomo">Autônomo</option>
                    <option value="facultativo">Facultativo</option>
                    <option value="rural">Rural</option>
                    <option value="especial">Especial</option>
                  </select>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={adicionarPeriodo}
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900"
              >
                Adicionar período
              </button>

              <button
                type="button"
                onClick={calcularTempo}
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white"
              >
                Calcular
              </button>
            </div>

            {resultado && (
              <div className="mt-8 rounded-[1.5rem] bg-stone-100 p-6">
                <p className="text-sm text-zinc-500">Tempo total estimado</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-950">
                  {resultado}
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  O resultado apresentado possui caráter estimativo, com base nas
                  informações inseridas pelo usuário, e não representa garantia de
                  concessão de benefício.
                </p>
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  )
}