import { NextResponse } from "next/server";

type TipoVinculo = "CLT" | "AUTONOMO" | "FACULTATIVO" | "RURAL" | "ESPECIAL";

type Vinculo = {
  tipo: TipoVinculo;
  inicio?: string;
  fim?: string;
};

type LeadPayload = {
  nome: string;
  telefone: string;
  dataNascimento?: string;
  sexo?: "M" | "F";
  tempoTotal?: string;
  idade?: string;
  cenario?: string;
  faltam?: string;
  diagnostico?: string;
  observacoes?: string;
  quantidadeVinculos?: number;
  vinculos?: Vinculo[];
  origem?: string;
  pagina?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function sanitize(value: unknown, max = 1000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function sanitizeTelefone(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\D/g, "").slice(0, 15);
}

function sanitizeSexo(value: unknown): "M" | "F" | "" {
  if (value === "M" || value === "F") return value;
  return "";
}

function sanitizeVinculos(vinculos: unknown): Vinculo[] {
  if (!Array.isArray(vinculos)) return [];

  const tiposValidos: TipoVinculo[] = [
    "CLT",
    "AUTONOMO",
    "FACULTATIVO",
    "RURAL",
    "ESPECIAL",
  ];

  return vinculos
    .map((item) => {
      const v = item as Vinculo;

      if (!v || !tiposValidos.includes(v.tipo)) return null;

      return {
        tipo: v.tipo,
        inicio: sanitize(v.inicio, 20),
        fim: sanitize(v.fim, 20),
      };
    })
    .filter(Boolean) as Vinculo[];
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const nome = sanitize(body?.nome, 150);
    const telefone = sanitizeTelefone(body?.telefone);

    if (!nome || !telefone) {
      return NextResponse.json(
        {
          ok: false,
          error: "Nome e telefone são obrigatórios.",
        },
        { status: 400 }
      );
    }

    const vinculos = sanitizeVinculos(body?.vinculos);

    const payload = {
      nome,
      telefone,
      dataNascimento: sanitize(body?.dataNascimento, 20),
      sexo: sanitizeSexo(body?.sexo),
      tempoTotal: sanitize(body?.tempoTotal, 100),
      idade: sanitize(body?.idade, 50),
      cenario: sanitize(body?.cenario, 150),
      faltam: sanitize(body?.faltam, 150),
      diagnostico: sanitize(body?.diagnostico, 1000),
      observacoes: sanitize(body?.observacoes, 2000),
      quantidadeVinculos:
        Number(body?.quantidadeVinculos || 0) || vinculos.length,
      vinculos,
      origem: sanitize(body?.origem || "calculadora", 100),
      pagina: sanitize(body?.pagina || "/calculadora", 200),
      utm_source: sanitize(body?.utm_source, 200),
      utm_medium: sanitize(body?.utm_medium, 200),
      utm_campaign: sanitize(body?.utm_campaign, 200),
      criadoEm: new Date().toISOString(),
    };

    console.log("Lead recebido:", payload);

    return NextResponse.json({
      ok: true,
      message: "Lead recebido com sucesso.",
      lead: payload,
    });
  } catch (error) {
    console.error("Erro em /api/leads:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Erro interno ao processar lead.",
      },
      { status: 500 }
    );
  }
}