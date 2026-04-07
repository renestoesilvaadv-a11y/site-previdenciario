"use client";

import { useMemo, useState } from "react";

type Sexo = "M" | "F" | "";
type TipoVinculo = "CLT" | "AUTONOMO" | "FACULTATIVO" | "RURAL" | "ESPECIAL";

type Vinculo = {
  id: string;
  tipo: TipoVinculo;
  inicio: string;
  fim: string;
};

type ResultadoCalculo = {
  tempoTotalDias: number;
  tempoTotalTexto: string;
  idadeAnos: number;
  idadeTexto: string;
  cenario: string;
  faltamTexto: string;
  diagnostico: string;
  observacoes: string;
};

const TIPOS_VINCULO: { value: TipoVinculo; label: string }[] = [
  { value: "CLT", label: "CLT" },
  { value: "AUTONOMO", label: "Autônomo" },
  { value: "FACULTATIVO", label: "Facultativo" },
  { value: "RURAL", label: "Rural" },
  { value: "ESPECIAL", label: "Especial" },
];

function gerarId() {
  return Math.random().toString(36).slice(2, 10);
}

function apenasNumeros(valor: string) {
  return valor.replace(/\D/g, "");
}

function formatarTelefone(valor: string) {
  const numeros = apenasNumeros(valor).slice(0, 11);

  if (numeros.length <= 10) {
    return numeros
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numeros
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function diferencaEmDias(inicio: string, fim: string) {
  if (!inicio || !fim) return 0;

  const dataInicio = new Date(`${inicio}T00:00:00`);
  const dataFim = new Date(`${fim}T00:00:00`);

  if (Number.isNaN(dataInicio.getTime()) || Number.isNaN(dataFim.getTime())) {
    return 0;
  }

  if (dataFim < dataInicio) return 0;

  const diffMs = dataFim.getTime() - dataInicio.getTime();
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

  return dias > 0 ? dias : 0;
}

function diasParaTexto(totalDias: number) {
  const anos = Math.floor(totalDias / 365);
  const restoAposAnos = totalDias % 365;
  const meses = Math.floor(restoAposAnos / 30);
  const dias = restoAposAnos % 30;

  return `${anos} anos, ${meses} meses e ${dias} dias`;
}

function calcularIdade(dataNascimento: string) {
  if (!dataNascimento) {
    return { anos: 0, texto: "Não informado" };
  }

  const hoje = new Date();
  const nasc = new Date(`${dataNascimento}T00:00:00`);

  if (Number.isNaN(nasc.getTime())) {
    return { anos: 0, texto: "Não informado" };
  }

  let idade = hoje.getFullYear() - nasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  const mesNasc = nasc.getMonth();
  const diaNasc = nasc.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  return {
    anos: idade >= 0 ? idade : 0,
    texto: `${idade >= 0 ? idade : 0} anos`,
  };
}

function calcularResultado(
  dataNascimento: string,
  sexo: Sexo,
  vinculos: Vinculo[]
): ResultadoCalculo {
  const idade = calcularIdade(dataNascimento);

  const tempoTotalDias = vinculos.reduce((acc, vinculo) => {
    let dias = diferencaEmDias(vinculo.inicio, vinculo.fim);

    if (vinculo.tipo === "ESPECIAL") {
      dias = Math.floor(dias * 1.4);
    }

    return acc + dias;
  }, 0);

  const tempoTotalAnos = tempoTotalDias / 365;
  const tempoTotalTexto = diasParaTexto(tempoTotalDias);

  let cenario = "Planejamento previdenciário";
  let faltamTexto = "Necessário analisar com mais precisão.";
  let diagnostico =
    "Ainda não há elementos suficientes para afirmar aposentadoria imediata. Recomenda-se análise documental completa.";
  let observacoes =
    "Este resultado é inicial e não substitui análise jurídica individualizada com CNIS, vínculos, contribuições e períodos especiais.";

  const idadeMinima = sexo === "F" ? 62 : sexo === "M" ? 65 : 0;
  const tempoMinimo = 15;
  const tempoIdeal = sexo === "F" ? 30 : sexo === "M" ? 35 : 0;

  const faltaIdade = idadeMinima > 0 ? Math.max(0, idadeMinima - idade.anos) : 0;
  const faltaTempoMinimo = Math.max(0, tempoMinimo - tempoTotalAnos);

  if (sexo && idade.anos >= idadeMinima && tempoTotalAnos >= tempoMinimo) {
    cenario = "Aposentadoria por idade possivelmente viável";
    faltamTexto = "Em tese, os requisitos mínimos aparentam estar preenchidos.";
    diagnostico =
      "Há indícios de elegibilidade para aposentadoria por idade, sujeito à conferência do CNIS, carência e regularidade contributiva.";
    observacoes =
      "É essencial validar carência, períodos em aberto, vínculos inconsistentes e eventuais ajustes cadastrais junto ao INSS.";
  } else if (sexo && tempoTotalAnos >= tempoIdeal) {
    cenario = "Possível regra de transição";
    faltamTexto =
      faltaIdade > 0
        ? `Faltam aproximadamente ${faltaIdade} ano(s) de idade, com tempo contributivo já robusto.`
        : "O tempo de contribuição sugere cenário favorável para estudo de regra de transição.";
    diagnostico =
      "O caso apresenta potencial enquadramento em regra de transição, mas a definição da melhor estratégia depende de análise técnica detalhada.";
    observacoes =
      "Períodos especiais, rurais, averbações e contribuições em atraso podem alterar significativamente o cenário final.";
  } else {
    cenario = "Planejamento previdenciário";
    faltamTexto =
      sexo && idadeMinima > 0
        ? `Faltam cerca de ${faltaIdade} ano(s) de idade e ${Math.ceil(
            Math.max(faltaTempoMinimo, 0)
          )} ano(s) de contribuição mínima.`
        : `Faltam aproximadamente ${Math.ceil(faltaTempoMinimo)} ano(s) para o mínimo contributivo.`;
    diagnostico =
      "Neste momento, o cenário aparenta ser de planejamento previdenciário, com necessidade de organizar contribuições e estruturar a melhor estratégia.";
    observacoes =
      "A análise ideal envolve conferência do CNIS, carência, tempo especial, tempo rural, regras de transição e projeção do benefício.";
  }

  if (vinculos.some((v) => v.tipo === "ESPECIAL")) {
    observacoes +=
      " Foram identificados períodos especiais, que merecem conferência documental específica para eventual conversão do tempo.";
  }

  if (vinculos.some((v) => v.tipo === "RURAL")) {
    observacoes +=
      " Também há período rural informado, que pode exigir prova material e, em certos casos, prova testemunhal.";
  }

  return {
    tempoTotalDias,
    tempoTotalTexto,
    idadeAnos: idade.anos,
    idadeTexto: idade.texto,
    cenario,
    faltamTexto,
    diagnostico,
    observacoes,
  };
}

export default function CalculadoraHome() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState<Sexo>("");
  const [vinculos, setVinculos] = useState<Vinculo[]>([
    {
      id: gerarId(),
      tipo: "CLT",
      inicio: "",
      fim: "",
    },
  ]);

  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null);
  const [calculado, setCalculado] = useState(false);
  const [enviandoWhatsapp, setEnviandoWhatsapp] = useState(false);
  const [statusLead, setStatusLead] = useState("");

  const totalVinculosValidos = useMemo(() => {
    return vinculos.filter((v) => v.inicio && v.fim).length;
  }, [vinculos]);

  function adicionarVinculo() {
    setVinculos((prev) => [
      ...prev,
      {
        id: gerarId(),
        tipo: "CLT",
        inicio: "",
        fim: "",
      },
    ]);
  }

  function removerVinculo(id: string) {
    setVinculos((prev) => prev.filter((v) => v.id !== id));
  }

  function atualizarVinculo<T extends keyof Vinculo>(
    id: string,
    campo: T,
    valor: Vinculo[T]
  ) {
    setVinculos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, [campo]: valor } : v))
    );
  }

  function validarCamposAntesDoCalculo() {
    if (!nome.trim()) {
      alert("Preencha o nome.");
      return false;
    }

    if (!telefone.trim()) {
      alert("Preencha o telefone.");
      return false;
    }

    if (!dataNascimento) {
      alert("Preencha a data de nascimento.");
      return false;
    }

    if (!sexo) {
      alert("Selecione o sexo.");
      return false;
    }

    const temVinculoValido = vinculos.some((v) => v.inicio && v.fim);

    if (!temVinculoValido) {
      alert("Adicione ao menos um vínculo com data de início e fim.");
      return false;
    }

    const vinculoInvalido = vinculos.some(
      (v) => (v.inicio && !v.fim) || (!v.inicio && v.fim)
    );

    if (vinculoInvalido) {
      alert("Todo vínculo preenchido deve ter início e fim.");
      return false;
    }

    return true;
  }

  function calcular() {
    if (!validarCamposAntesDoCalculo()) return;

    const resultadoFinal = calcularResultado(dataNascimento, sexo, vinculos);

    setResultado(resultadoFinal);
    setCalculado(true);

    const leadLocal = {
      nome: nome.trim(),
      telefone: apenasNumeros(telefone),
      dataNascimento,
      sexo,
      quantidadeVinculos: vinculos.length,
      vinculos,
      resultado: resultadoFinal,
      salvoEm: new Date().toISOString(),
    };

    try {
      const historico = localStorage.getItem("leads_previdenciarios");
      const listaAtual = historico ? JSON.parse(historico) : [];
      const novaLista = [leadLocal, ...listaAtual].slice(0, 100);
      localStorage.setItem("leads_previdenciarios", JSON.stringify(novaLista));
    } catch (error) {
      console.error("Erro ao salvar lead no localStorage:", error);
    }

    setStatusLead("Simulação gerada com sucesso.");
  }

  async function salvarLeadNoServidor(payload: Record<string, unknown>) {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Erro da API:", data);
        return false;
      }

      return data?.ok === true;
    } catch (error) {
      console.error("Erro ao salvar lead no servidor:", error);
      return false;
    }
  }

  async function enviarParaWhatsapp() {
    if (!resultado) {
      alert("Faça a simulação antes de enviar para o WhatsApp.");
      return;
    }

    setEnviandoWhatsapp(true);
    setStatusLead("Salvando lead e preparando seu atendimento...");

    const payload = {
      nome: nome.trim(),
      telefone: apenasNumeros(telefone),
      dataNascimento,
      sexo,
      tempoTotal: resultado.tempoTotalTexto,
      idade: resultado.idadeTexto,
      cenario: resultado.cenario,
      faltam: resultado.faltamTexto,
      diagnostico: resultado.diagnostico,
      observacoes: resultado.observacoes,
      quantidadeVinculos: vinculos.length,
      vinculos: vinculos.map((v) => ({
        tipo: v.tipo,
        inicio: v.inicio,
        fim: v.fim,
      })),
      origem: "calculadora",
      pagina: "/calculadora",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
    };

    const leadSalvo = await salvarLeadNoServidor(payload);

    if (leadSalvo) {
      setStatusLead("Lead salvo com sucesso. Abrindo WhatsApp...");
    } else {
      setStatusLead("Não foi possível salvar o lead no servidor, mas o WhatsApp será aberto.");
    }

    const mensagem = `
Olá, gostaria de uma análise previdenciária.

Nome: ${nome}
Telefone: ${telefone}
Data de nascimento: ${dataNascimento}
Sexo: ${sexo === "M" ? "Homem" : sexo === "F" ? "Mulher" : "Não informado"}

Tempo total apurado: ${resultado.tempoTotalTexto}
Idade atual: ${resultado.idadeTexto}
Cenário inicial: ${resultado.cenario}
Falta aproximada: ${resultado.faltamTexto}
Quantidade de vínculos: ${vinculos.length}

Diagnóstico inicial:
${resultado.diagnostico}

Observações:
${resultado.observacoes}
    `.trim();

    const numeroWhatsapp = "5519982498548";
    const linkWhatsapp = `https://wa.me/${5519982498548}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(linkWhatsapp, "_blank");
    setEnviandoWhatsapp(false);
  }

  function limparTudo() {
    setNome("");
    setTelefone("");
    setDataNascimento("");
    setSexo("");
    setVinculos([
      {
        id: gerarId(),
        tipo: "CLT",
        inicio: "",
        fim: "",
      },
    ]);
    setResultado(null);
    setCalculado(false);
    setStatusLead("");
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.96] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.04),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.06),transparent_24%)]" />

            <div className="relative">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                  Simulação previdenciária
                </span>

                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Análise inicial estratégica
                </span>
              </div>

              <div className="mb-10 max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Descubra seu cenário previdenciário com uma leitura inicial clara e profissional
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                  Preencha seus dados e receba uma estimativa organizada sobre tempo de contribuição,
                  idade, cenário provável e próximos passos para análise jurídica.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-zinc-800">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-800">
                    Telefone
                  </label>
                  <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                    placeholder="(11) 99999-9999"
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-800">
                    Data de nascimento
                  </label>
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-zinc-800">
                    Sexo
                  </label>
                  <select
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value as Sexo)}
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                  >
                    <option value="">Selecione</option>
                    <option value="M">Homem</option>
                    <option value="F">Mulher</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] border border-zinc-200 bg-zinc-50/80 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">
                      Vínculos contributivos
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      Adicione os períodos que deseja considerar na análise inicial.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={adicionarVinculo}
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-zinc-900 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
                  >
                    + Adicionar vínculo
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {vinculos.map((vinculo, index) => (
                    <div
                      key={vinculo.id}
                      className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                            Período contributivo
                          </p>
                          <h4 className="mt-1 text-sm font-semibold text-zinc-900">
                            Vínculo {index + 1}
                          </h4>
                        </div>

                        {vinculos.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removerVinculo(vinculo.id)}
                            className="text-sm font-semibold text-red-600 transition hover:opacity-80"
                          >
                            Remover
                          </button>
                        )}
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-800">
                            Tipo
                          </label>
                          <select
                            value={vinculo.tipo}
                            onChange={(e) =>
                              atualizarVinculo(
                                vinculo.id,
                                "tipo",
                                e.target.value as TipoVinculo
                              )
                            }
                            className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                          >
                            {TIPOS_VINCULO.map((tipo) => (
                              <option key={tipo.value} value={tipo.value}>
                                {tipo.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-800">
                            Início
                          </label>
                          <input
                            type="date"
                            value={vinculo.inicio}
                            onChange={(e) =>
                              atualizarVinculo(vinculo.id, "inicio", e.target.value)
                            }
                            className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-800">
                            Fim
                          </label>
                          <input
                            type="date"
                            value={vinculo.fim}
                            onChange={(e) =>
                              atualizarVinculo(vinculo.id, "fim", e.target.value)
                            }
                            className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-950/5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={calcular}
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-zinc-950 px-7 text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Calcular simulação
                </button>

                <button
                  type="button"
                  onClick={limparTudo}
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
                >
                  Limpar
                </button>
              </div>

              {statusLead && (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  {statusLead}
                </div>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#09090b_0%,#111827_100%)] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_26%)]" />

            <div className="relative flex h-full flex-col">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Resultado inicial
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-[30px]">
                  Análise estratégica automática
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                  Uma leitura inicial do caso para orientar o próximo passo com mais clareza,
                  confiança e rapidez.
                </p>
              </div>

              {!calculado || !resultado ? (
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm leading-7 text-white/70">
                    Preencha os campos, adicione seus vínculos e clique em{" "}
                    <strong className="text-white">Calcular simulação</strong>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                          Tempo total
                        </p>
                        <p className="mt-3 text-xl font-semibold text-white">
                          {resultado.tempoTotalTexto}
                        </p>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                          Idade atual
                        </p>
                        <p className="mt-3 text-xl font-semibold text-white">
                          {resultado.idadeTexto}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Cenário provável
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">
                        {resultado.cenario}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Falta aproximada
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {resultado.faltamTexto}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Diagnóstico jurídico inicial
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {resultado.diagnostico}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Observações automáticas
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {resultado.observacoes}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[28px] border border-emerald-400/20 bg-emerald-400/10 p-5 shadow-[0_10px_40px_rgba(16,185,129,0.08)]">
                    <p className="text-sm leading-7 text-emerald-50">
                      Sua simulação está pronta. Agora você pode enviar seus dados e receber atendimento via WhatsApp.
                    </p>

                    <button
                      type="button"
                      onClick={enviarParaWhatsapp}
                      disabled={enviandoWhatsapp}
                      className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-emerald-500 px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {enviandoWhatsapp ? "Enviando..." : "Receber análise no WhatsApp"}
                    </button>

                    <p className="mt-3 text-xs text-emerald-100/75">
                      Atendimento inicial estratégico, com retorno rápido.
                    </p>
                  </div>
                </>
              )}

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Resumo rápido
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <span className="block text-white/45">Vínculos</span>
                    <strong className="mt-2 block text-xl font-semibold text-white">
                      {vinculos.length}
                    </strong>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <span className="block text-white/45">Válidos</span>
                    <strong className="mt-2 block text-xl font-semibold text-white">
                      {totalVinculosValidos}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Segurança
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Os dados informados são usados apenas para análise inicial do caso e contato profissional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-amber-300/50 bg-gradient-to-r from-amber-50 to-yellow-50 px-5 py-4 text-sm leading-7 text-amber-950 shadow-sm">
          <strong>Aviso importante:</strong> esta calculadora fornece uma análise inicial, com caráter informativo.
          A confirmação do direito depende de avaliação jurídica individualizada, documentos e consulta ao CNIS.
        </div>
      </div>
    </section>
  );
}