import { CalculadoraHome } from '../../components/calculadora-home'

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-10 text-center text-white">
          <h1 className="text-4xl font-semibold">
            Simulação de Aposentadoria
          </h1>
          <p className="mt-4 text-slate-300">
            Preencha seus vínculos e obtenha uma estimativa inicial do seu tempo de contribuição.
          </p>
        </div>

        {/* Calculadora */}
        <CalculadoraHome />

      </div>
    </div>
  )
}