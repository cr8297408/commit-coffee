import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#111111]/75" />
        {/* Green radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <p className="font-mono text-[#00FF88] text-sm tracking-widest mb-6">
          // SPECIALTY COFFEE FOR BUILDERS
        </p>

        <h1 className="font-bold leading-none mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-[#F5F5F5]">
            Fuel for
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl"
            style={{
              background: "linear-gradient(135deg, #00FF88 0%, #B87333 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Builders.
          </span>
        </h1>

        <p className="text-[#888888] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Café de origen Huila diseñado para programadores, ingenieros,
          técnicos y creadores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#producto"
            className="bg-[#00FF88] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#00e87a] transition-all duration-200 w-full sm:w-auto text-center"
          >
            Comprar Ahora
          </a>
          <a
            href="#origen"
            className="border border-[#F5F5F5] text-[#F5F5F5] font-semibold px-8 py-3 rounded-lg hover:bg-[#F5F5F5]/10 transition-all duration-200 w-full sm:w-auto text-center"
          >
            Conoce el Origen
          </a>
        </div>
      </div>
    </section>
  );
}
