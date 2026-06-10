import Image from "next/image";

const metrics = [
  { value: "+100", label: "Builders" },
  { value: "+500", label: "Tazas Servidas" },
  { value: "+1000", label: "Horas de Código" },
];

export default function Community() {
  return (
    <section id="comunidad" className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/brew-dark..png"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#111111]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00FF88] font-mono text-sm tracking-widest mb-3">
            // COMUNIDAD
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">
            La comunidad que construye
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#111111]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl overflow-hidden">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center justify-center py-12 px-8 animate-counter ${
                index < metrics.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#2a2a2a]"
                  : ""
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{
                  background: "linear-gradient(135deg, #00FF88 0%, #B87333 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {metric.value}
              </div>
              <div className="text-[#888888] text-base font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
