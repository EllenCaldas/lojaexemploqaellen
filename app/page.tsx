'use client';
import { useEffect } from "react";

declare global {
  interface Window {
    renderBotWidget: (
      botId: string,
      options?: any,
      resetSession?: boolean,
      customElementId?: boolean | string
    ) => void;
  }
}

export default function Home() {
  const donuts = [
    { id: 1, name: "Donut Chocolate", description: "Delicioso donut com cobertura de chocolate.", price: "R$ 5,00", emoji: "🍫🍩" },
    { id: 2, name: "Donut Morango", description: "Donut recheado com creme de morango.", price: "R$ 5,50", emoji: "🍓🍩" },
    { id: 3, name: "Donut Caramelo", description: "Donut com cobertura de caramelo e amendoim.", price: "R$ 6,00", emoji: "🍯🍩" },
  ];

  useEffect(() => {
    const scripts = [
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/purify.min.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/showdown.min.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/axios.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/socket.io.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/webchat/webchat.js",
    ];

    scripts.forEach((src, index) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (index === scripts.length - 1) {
        script.onload = () => {
          window.renderBotWidget("68d192e3bf69c8ad1814a5e8");
        };
      }
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center gap-16">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-yellow-600">Loja de Donuts da Ellen 🍩</h1>
        <p className="text-gray-600">Escolha seu donut favorito e aproveite!</p>
      </header>

      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {donuts.map((donut) => (
          <div key={donut.id} className="p-4 border rounded shadow flex flex-col items-center hover:scale-105 transition-transform">
            <div className="text-6xl">{donut.emoji}</div>
            <h2 className="mt-2 font-semibold text-lg">{donut.name}</h2>
            <p className="text-sm text-gray-600 text-center">{donut.description}</p>
            <p className="mt-1 font-bold">{donut.price}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Comprar</button>
          </div>
        ))}
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; 2025 Loja de Donuts. Todos os direitos reservados.
      </footer>
    </div>
  );
}
