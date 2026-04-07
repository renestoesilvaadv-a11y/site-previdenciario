import Link from "next/link";
import CalculadoraHome from "../../components/calculadora-home";

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_20%),linear-gradient(180deg,#020617_0%,#020617_45%,#0f172a_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            ← Voltar para o site
          </Link>
        </div>

        <div className="mx-auto mb-10 max-w-4xl text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Simulação de Aposentadoria
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Preencha seus vínculos e obtenha uma estimativa inicial do seu tempo de contribuição,
            com resultado organizado e pronto para análise estratégica.
          </p>

          <p className="mt-4 text-sm font-medium text-amber-300">
            🔒 Seus dados não são compartilhados publicamente. Simulação segura.
          </p>
        </div>

        <CalculadoraHome />
      </div>
    </div>
  );
}