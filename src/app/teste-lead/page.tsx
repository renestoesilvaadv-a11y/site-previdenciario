"use client";

import { useState } from "react";

export default function TesteLeadPage() {
  const [resultado, setResultado] = useState("Nenhum teste executado ainda.");

  async function testarEnvio() {
    setResultado("Enviando...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: "Teste Cliente",
          telefone: "11999999999",
          origem: "teste-manual",
          pagina: "/teste-lead",
        }),
      });

      const data = await response.json();
      setResultado(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setResultado("Erro ao enviar lead.");
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Teste de envio de lead</h1>

        <button
          onClick={testarEnvio}
          className="mt-6 rounded-xl bg-zinc-900 px-5 py-3 text-white"
        >
          Enviar lead de teste
        </button>

        <pre className="mt-6 overflow-auto rounded-xl bg-zinc-100 p-4 text-sm">
          {resultado}
        </pre>
      </div>
    </main>
  );
}