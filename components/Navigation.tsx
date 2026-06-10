import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/commit-coffee.png"
            alt="Commit Coffee"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#producto"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-all duration-200"
          >
            Producto
          </a>
          <a
            href="#origen"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-all duration-200"
          >
            Origen
          </a>
          <a
            href="#comunidad"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-all duration-200"
          >
            Comunidad
          </a>
        </div>

        <a
          href="#producto"
          className="bg-[#00FF88] text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#00e87a] transition-all duration-200"
        >
          Comprar
        </a>
      </div>
    </nav>
  );
}
