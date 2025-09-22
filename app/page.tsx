// app/page.tsx
import Image from "next/image";

export default function Home() {
  const donuts = [
    {
      id: 1,
      name: "Donut Chocolate",
      description: "Delicioso donut com cobertura de chocolate.",
      price: "R$ 5,00",
      image: "/donut-chocolate.png",
    },
    {
      id: 2,
      name: "Donut Morango",
      description: "Donut recheado com creme de morango.",
      price: "R$ 5,50",
      image: "/donut-morango.png",
    },
    {
      id: 3,
      name: "Donut Caramelo",
      description: "Donut com cobertura de caramelo e amendoim.",
      price: "R$ 6,00",
      image: "/donut-caramelo.png",
    },
  ];

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center gap-16">
      {/* Cabeçalho */}
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-yellow-600">Loja de Donuts 🍩</h1>
        <p className="text-gray-600">Escolha seu donut favorito e aproveite!</p>
      </header>

      {/* Lista de Donuts */}
      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {donuts.map((donut) => (
          <div
            key={donut.id}
            className="p-4 border rounded shadow flex flex-col items-center hover:scale-105 transition-transform"
          >
            <Image
              src={donut.image}
              alt={donut.name}
              width={150}
              height={150}
            />
            <h2 className="mt-2 font-semibold text-lg">{donut.name}</h2>
            <p className="text-sm text-gray-600 text-center">{donut.description}</p>
            <p className="mt-1 font-bold">{donut.price}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Comprar
            </button>
          </div>
        ))}
      </main>

      {/* Widget do Webchat */}
      <div id="webchat-container" className="fixed bottom-4 right-4 z-50">
        <script
          src="https://cdn.hmlbots.digitalcontact.cloud/webchat.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.renderBotWidget(
                '660c440dab86155a5de14e56',
                {
                  var_title: "Loja de Donuts",
                  layout: {}
                },
                false,
                false
              );
            `,
          }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        &copy; 2025 Loja de Donuts. Todos os direitos reservados.
      </footer>
    </div>
  );
}
