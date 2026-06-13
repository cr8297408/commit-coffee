import Image from "next/image";

const specs = [
  {
    label: "ORIGEN",
    value: "Huila, Colombia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
        <path d="m9 9 3-3 3 3" /><path d="M12 6v8" /><path d="m9 16 3 2 3-2" />
      </svg>
    ),
  },
  {
    label: "ALTITUD",
    value: "1550 msnm",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    label: "PROCESO",
    value: "Honey",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "NOTAS",
    value: "Miel, Panela,\nChocolate, Frutos Rojos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        {/* Horizontal gradient: solid left → transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #111111 0%, #111111 30%, rgba(17,17,17,0.85) 50%, rgba(17,17,17,0.3) 70%, rgba(17,17,17,0.0) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-8 pt-28 pb-12">
        <div className="max-w-xl">
          {/* Terminal label */}
          <p className="font-mono text-[#00FF88] text-sm tracking-[0.25em] mb-6 uppercase">
            &gt; Fuel for Builders_
          </p>

          {/* Main title */}
          <h1
            className="font-black uppercase leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            <span className="block text-[#F5F5F5]">Fuel For</span>
            <span className="block text-[#F5F5F5]">
              Builders
              <span className="text-[#00FF88]">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#aaaaaa] text-base md:text-lg leading-relaxed mb-10 max-w-sm">
            Café de origen Huila diseñado para programadores, ingenieros, técnicos
            y creadores.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#producto"
              className="flex items-center gap-3 bg-[#00FF88] text-black font-bold text-sm tracking-widest uppercase px-7 py-4 rounded-md hover:bg-[#00e87a] transition-all duration-200"
            >
              Comprar Ahora
              <span className="text-base">→</span>
            </a>
            <a
              href="#origen"
              className="flex items-center gap-3 bg-transparent border border-[#F5F5F5]/30 text-[#F5F5F5] font-bold text-sm tracking-widest uppercase px-7 py-4 rounded-md hover:border-[#F5F5F5]/70 hover:bg-[#F5F5F5]/5 transition-all duration-200"
            >
              Conoce el Origen
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom specs bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-10">
        <div className="flex flex-wrap items-start gap-8 md:gap-12">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-start gap-3">
              <span className="text-[#00FF88] mt-0.5 shrink-0">{spec.icon}</span>
              <div>
                <p className="text-[#888888] text-[10px] font-mono tracking-widest uppercase mb-0.5">
                  {spec.label}
                </p>
                <p className="text-[#F5F5F5] text-sm font-medium whitespace-pre-line leading-snug">
                  {spec.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
