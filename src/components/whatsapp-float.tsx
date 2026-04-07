"use client";

export default function WhatsappFloat() {
  const numeroWhatsapp = "5511999999999";

  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de falar sobre meu caso previdenciário."
  );

  const link = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-[999] flex items-center gap-3"
    >
      <div className="hidden rounded-full border border-emerald-400/20 bg-zinc-950/95 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 group-hover:-translate-x-1 sm:flex">
        Fale agora com um especialista
      </div>

      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_12px_40px_rgba(16,185,129,0.45)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_16px_50px_rgba(16,185,129,0.60)]">
        <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/30" />
        <span className="absolute inset-[-8px] rounded-full border border-emerald-300/30" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative h-8 w-8"
        >
          <path d="M19.11 17.2c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.59.14-.17.27-.68.87-.83 1.05-.15.18-.31.2-.58.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.11-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.59-1.43-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.13.18 1.9 2.89 4.6 4.05.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.31Z" />
          <path d="M16.03 3.2c-7.03 0-12.74 5.68-12.74 12.68 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.74-1.77a12.85 12.85 0 0 0 6.09 1.55h.01c7.03 0 12.76-5.69 12.76-12.69 0-3.39-1.33-6.58-3.72-8.98A12.66 12.66 0 0 0 16.03 3.2Zm0 23.24h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4 .98 1.07-3.9-.25-.4a10.48 10.48 0 0 1-1.63-5.57c0-5.83 4.79-10.57 10.68-10.57 2.85 0 5.52 1.1 7.53 3.11a10.47 10.47 0 0 1 3.13 7.46c0 5.83-4.79 10.61-10.68 10.61Z" />
        </svg>
      </div>
    </a>
  );
}