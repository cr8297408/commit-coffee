function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="font-bold text-lg tracking-widest text-[#F5F5F5]">
            COMMIT{" "}
            <span className="text-[#00FF88]">●</span>{" "}
            COFFEE
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#888888] hover:text-[#00FF88] transition-all duration-200"
            >
              <IconInstagram />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-[#888888] hover:text-[#00FF88] transition-all duration-200"
            >
              <IconWhatsApp />
            </a>
            <a
              href="mailto:hola@commitcoffee.co"
              aria-label="Email"
              className="text-[#888888] hover:text-[#00FF88] transition-all duration-200"
            >
              <IconMail />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center text-[#888888] text-sm mb-8">
          Fuel for Builders.
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1a1a1a] text-xs text-[#888888]">
          <span>© 2024 Commit Coffee™</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F5F5F5] transition-all duration-200">
              Política de Privacidad
            </a>
            <span>·</span>
            <a href="#" className="hover:text-[#F5F5F5] transition-all duration-200">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
