import CalculadoraHome from "../components/calculadora-home";

export default function Home() {
  const areas = [
    'Aposentadoria por idade',
    'Aposentadoria por tempo de contribuição',
    'Auxílio-doença',
    'Aposentadoria por invalidez',
    'BPC/LOAS',
    'Revisão de benefício',
  ]

  const passos = [
    {
      numero: '01',
      titulo: 'Contato inicial',
      descricao:
        'Você fala direto com o escritório pelo WhatsApp e explica sua situação com rapidez e clareza.',
    },
    {
      numero: '02',
      titulo: 'Análise do caso',
      descricao:
        'Avaliamos documentos, histórico contributivo e o melhor caminho para buscar seu direito.',
    },
    {
      numero: '03',
      titulo: 'Estratégia jurídica',
      descricao:
        'Definimos a solução mais segura, seja administrativa ou judicial, de acordo com seu caso.',
    },
    {
      numero: '04',
      titulo: 'Acompanhamento',
      descricao:
        'Você recebe orientação clara em cada etapa, com atendimento próximo e objetivo.',
    },
  ]

  const diferenciais = [
    'Atendimento direto com advogado',
    'Atuação focada em Direito Previdenciário',
    'Análise técnica e individual do caso',
    'Clareza em cada etapa do processo',
    'Atendimento online para todo o Brasil',
    'Resposta rápida pelo WhatsApp',
  ]

  const depoimentos = [
    {
      nome: 'Cliente atendida em revisão de benefício',
      texto:
        'Fui orientada com clareza desde o início. O atendimento foi rápido, objetivo e me senti segura durante todo o processo.',
    },
    {
      nome: 'Cliente atendido em benefício por incapacidade',
      texto:
        'Meu benefício havia sido negado e eu não sabia o que fazer. Recebi uma análise cuidadosa e consegui seguir o caminho certo.',
    },
    {
      nome: 'Cliente atendida em aposentadoria',
      texto:
        'Gostei muito da forma como explicaram cada etapa. Tudo foi tratado com profissionalismo e atenção.',
    },
  ]

  const faq = [
    {
      pergunta: 'INSS negou meu benefício. O que posso fazer?',
      resposta:
        'Dependendo do caso, é possível recorrer administrativamente ou buscar a via judicial. O primeiro passo é analisar a documentação e entender o motivo da negativa.',
    },
    {
      pergunta: 'O atendimento precisa ser presencial?',
      resposta:
        'Não. O atendimento pode ser realizado online, com envio de documentos e acompanhamento à distância em todo o Brasil.',
    },
    {
      pergunta: 'Quanto tempo demora para resolver?',
      resposta:
        'O prazo varia conforme o tipo de benefício, a documentação e o caminho adotado. Na análise inicial, você recebe uma estimativa mais realista para o seu caso.',
    },
    {
      pergunta: 'Como funciona a análise inicial?',
      resposta:
        'Você envia informações básicas sobre o seu histórico e a documentação disponível. A partir disso, o escritório avalia a viabilidade e os próximos passos.',
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 selection:bg-amber-200">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
              Advocacia Previdenciária
            </div>
            <div className="mt-1 text-lg font-semibold text-slate-900">
              SILVA FIRMA DE ADVOCACIA
            </div>
          </div>

          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a href="#simulador" className="hover:text-slate-900">
              Simulação
            </a>
            <a href="#areas" className="hover:text-slate-900">
              Áreas
            </a>
            <a href="#sobre" className="hover:text-slate-900">
              Sobre
            </a>
            <a href="#faq" className="hover:text-slate-900">
              Dúvidas
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,165,92,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-stone-200">
                Atendimento online em todo o Brasil
              </div>

              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Teve seu benefício negado pelo INSS?
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Análise técnica, atendimento direto com advogado e estratégia
                jurídica clara para buscar o que é seu por direito.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5519982498548?text=Olá,%20vim%20do%20site%20e%20quero%20ajuda%20com%20meu%20benefício%20do%20INSS."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-500 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Falar com advogado no WhatsApp
                </a>

                <a
  href="/calculadora"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
>
  Fazer simulação gratuita
</a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  'Especialista em Direito Previdenciário',
                  'Atendimento rápido e organizado',
                  'Análise individual de cada caso',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                Sobre o escritório
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Atendimento previdenciário com técnica, clareza e estratégia.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                Atuação focada em Direito Previdenciário, com análise cuidadosa
                de aposentadorias, benefícios por incapacidade, BPC/LOAS e
                revisões.
              </p>
              <p>
                O objetivo é simples: oferecer orientação segura, explicar cada
                etapa do processo em linguagem clara e buscar a solução mais
                vantajosa para o seu caso.
              </p>
              <p className="font-medium text-slate-900">
                Atendimento online em todo o Brasil, com contato direto pelo
                WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                Áreas de atuação
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Soluções previdenciárias para quem precisa resolver com
                segurança.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-lg font-semibold text-slate-950">
                    {area}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Avaliação do caso, orientação jurídica personalizada e
                    definição do melhor caminho para buscar seu direito.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                Como funciona
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Um processo claro, organizado e sem labirintos desnecessários.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Cada caso é analisado individualmente para identificar o caminho
                mais seguro e eficiente.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {passos.map((passo) => (
                <div
                  key={passo.numero}
                  className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                    {passo.numero}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">
                    {passo.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {passo.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                  Diferenciais
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                  Atuação pautada por precisão técnica e atendimento humano.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Mais do que informação solta, você recebe direcionamento claro
                  e análise voltada à sua realidade previdenciária.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {diferenciais.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm font-medium text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                Depoimentos
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Confiança construída com atendimento claro e responsável.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {depoimentos.map((item) => (
                <div
                  key={item.nome}
                  className="rounded-[1.5rem] bg-white p-6 shadow-sm"
                >
                  <div className="text-amber-600">★★★★★</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    “{item.texto}”
                  </p>
                  <div className="mt-5 text-sm font-semibold text-slate-900">
                    {item.nome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
              Dúvidas frequentes
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Perguntas comuns em matéria previdenciária.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details
                key={item.pergunta}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-900">
                  {item.pergunta}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500">
              Contato
            </div>
            <h2 className="mt-4 text-4xl font-semibold">
              Precisa de orientação previdenciária?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Fale agora com um advogado e receba uma análise inicial do seu caso
              com atendimento organizado, técnico e individual.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/5519982488549?text="Olá,%20vim%20do%20site%20e%20quero%20ajuda%20com%20meu%20benefício%20do%20INSS."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
              >
                Falar no WhatsApp agora
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}