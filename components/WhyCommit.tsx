'use client';

import Image from "next/image";

const features = [
  {
    icon: "⚡",
    title: "Sesiones profundas",
    description: "Construido para sesiones profundas de trabajo sin interrupciones.",
    image: "/card1.png",
  },
  {
    icon: "🌎",
    title: "Origen colombiano",
    description: "Café de origen colombiano, seleccionado directamente desde Huila.",
    image: "/card2.png",
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
    image: "/card3.png",
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden group hover:border-[#00FF88]/30 transition-all duration-300">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00FF88]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00FF88]/0 to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="text-3xl mb-4 relative z-10">{feature.icon}</div>
        <h3 className="text-[#F5F5F5] font-semibold text-lg mb-2 relative z-10">
          {feature.title}
        </h3>
        <p className="text-[#888888] text-sm leading-relaxed relative z-10">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

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
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}