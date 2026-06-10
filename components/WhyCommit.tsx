import Image from "next/image";

const features = [
  {
    icon: "⚡",
    title: "Sesiones profundas",
    description: "Construido para sesiones profundas de trabajo sin interrupciones.",
    image: null,
  },
  {
    icon: "🌎",
    title: "Origen colombiano",
    description: "Café de origen colombiano, seleccionado directamente desde Huila.",
    image: null,
  },
  {
    icon: "🍯",
    title: "Proceso Honey",
    description: "Proceso Honey que realza las notas dulces naturales del grano.",
    image: "/process-coffee.png",
  },
  {
    icon: "☕",
    title: "Perfil balanceado",
    description: "Perfil dulce y balanceado, ideal para tomar negro o con leche.",
    image: null,
  },
];

export default function WhyCommit() {
  return (
    <section className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#00FF88] font-mono text-sm tracking-widest mb-3">
            // WHY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">
            Por qué Commit Coffee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#00FF88]/50 hover:scale-[1.01] transition-all duration-200 group"
            >
              {feature.image && (
                <div className="relative w-full h-40">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                </div>
              )}
              <div className="p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-[#F5F5F5] font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
