import Image from "next/image";

const gitLog = [
  { hash: "a1b2c3d", type: "feat", message: "first batch roasted" },
  { hash: "d4e5f6a", type: "fix", message: "adjust grind size" },
  { hash: "b7c8d9e", type: "init", message: "origin story" },
];

export default function Story() {
  return (
    <section id="origen" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Origin image + terminal overlay */}
          <div className="relative">
            {/* Origin photo */}
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/origin-huila.png"
                alt="Cafetales en Huila, Colombia"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
            </div>

            {/* Terminal floating card */}
            <div
              className="absolute bottom-0 left-4 right-4 rounded-xl overflow-hidden border border-[#2a2a2a]"
              style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a]/80 border-b border-[#2a2a2a]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                <span className="ml-2 text-[#888888] text-xs font-mono">
                  bash — commit-coffee
                </span>
              </div>
              <div className="p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00FF88]">$</span>
                  <span className="text-[#F5F5F5]">git log --oneline</span>
                </div>
                <div className="space-y-1.5">
                  {gitLog.map((entry) => (
                    <div key={entry.hash} className="flex items-start gap-3">
                      <span className="text-[#B87333] shrink-0">{entry.hash}</span>
                      <span>
                        <span className="text-[#00FF88]">{entry.type}</span>
                        <span className="text-[#888888]">: </span>
                        <span className="text-[#F5F5F5]">{entry.message}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-[#888888]">
                  <span className="text-[#00FF88]">$</span>
                  <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div>
            <p className="text-[#00FF88] font-mono text-sm tracking-widest mb-4">
              // NUESTRA HISTORIA
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6 leading-snug">
              Cada gran producto comienza con una idea.
            </h2>
            <p className="text-[#888888] leading-relaxed mb-8">
              Commit Coffee nace para acompañar a quienes construyen software,
              empresas, productos e innovaciones que cambian el mundo. Como
              todo buen commit: pensado, hecho con intención y listo para
              producción.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-sm">
              <span className="text-[#00FF88]">main</span>
              <span className="text-[#00FF88] tracking-widest">──●</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
