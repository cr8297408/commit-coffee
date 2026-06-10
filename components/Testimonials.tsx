const testimonials = [
  {
    quote:
      "Desde que uso Commit Coffee mis pull requests son un 40% más elegantes. No sé cómo, pero funciona.",
    author: "Matías R.",
    role: "Senior Frontend Engineer",
  },
  {
    quote:
      "Proceso Honey con notas de miel y panela. Perfecto para debugging a las 2am.",
    author: "Laura V.",
    role: "Full Stack Developer",
  },
  {
    quote:
      "Finalmente un café que entiende el dolor de un deploy en viernes.",
    author: "Andrés M.",
    role: "DevOps Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">
            <span className="text-[#00FF88] font-mono">// </span>
            Lo que dicen los builders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 relative overflow-hidden hover:border-[#00FF88]/30 transition-all duration-200"
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute top-2 right-4 text-8xl font-serif leading-none select-none pointer-events-none"
                style={{ color: "rgba(0,255,136,0.08)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="text-[#00FF88] text-sm mb-4 tracking-widest">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-[#888888] text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="text-[#F5F5F5] font-semibold text-sm">
                  {t.author}
                </div>
                <div className="text-[#888888] text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
