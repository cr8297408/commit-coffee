import Image from "next/image";

const flavorNotes = ["Miel", "Panela", "Chocolate", "Frutos Rojos"];

export default function Product() {
  return (
    <section id="producto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">
              BUILD v1.0
            </h2>
            <span className="bg-[#00FF88] text-black text-xs font-bold px-2 py-1 rounded-md tracking-widest">
              NUEVO
            </span>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product image */}
            <div className="md:w-2/5 flex items-center justify-center p-10 bg-[#141414] border-b md:border-b-0 md:border-r border-[#2a2a2a]">
              <div className="relative w-56 h-72">
                <Image
                  src="/bag-mockup.png"
                  alt="Commit Coffee BUILD v1.0 — Proceso Honey"
                  fill
                  className="object-contain drop-shadow-2xl"
                  quality={90}
                />
              </div>
            </div>

            {/* Product details */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-6">
              {/* Specs grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Proceso", value: "Honey" },
                  { label: "Origen", value: "Elías, Huila" },
                  { label: "Altitud", value: "1550 msnm" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-[#111] border border-[#2a2a2a] rounded-lg p-3 text-center"
                  >
                    <div className="text-[#888888] text-xs mb-1">
                      {spec.label}
                    </div>
                    <div className="text-[#F5F5F5] text-sm font-semibold">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Flavor notes */}
              <div>
                <div className="text-[#888888] text-xs font-mono mb-3">
                  // NOTAS DE SABOR
                </div>
                <div className="flex flex-wrap gap-2">
                  {flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full text-sm font-medium text-[#B87333] border border-[#B87333]/30"
                      style={{ background: "rgba(184,115,51,0.1)" }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="text-4xl font-bold text-[#F5F5F5] mb-1">
                  $34.900 COP
                </div>
                <div className="text-[#888888] text-sm">
                  250g / Café molido medio
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-[#00FF88] text-black font-semibold py-3 rounded-lg hover:bg-[#00e87a] transition-all duration-200 flex items-center justify-center gap-2 text-base">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
