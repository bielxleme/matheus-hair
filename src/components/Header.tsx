import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '../utils';
import { NAV_LINKS } from '../utils';
import { getWhatsAppUrl, WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-editorial-black-100 shadow-editorial'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-luxury" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="inicio"
            smooth={true}
            duration={600}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Matheus Hair - Página inicial"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-champagne flex items-center justify-center">
              <Scissors className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
            </div>
            <span className="hidden lg:block font-display text-xl lg:text-2xl font-medium text-editorial-black-950 tracking-tight">
              Matheus Hair
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href.replace('#', '')}
                smooth={true}
                duration={600}
                offset={-80}
                className={cn(
                  'nav-link text-sm font-medium tracking-wide cursor-pointer',
                  isScrolled ? 'text-editorial-black-600' : 'text-editorial-black-700'
                )}
                spy={true}
                activeClass="nav-link-active"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden lg:inline-flex"
              aria-label="Agendar horário pelo WhatsApp"
            >
              <span>✨ Agendar Horário</span>
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-2 text-sm"
              aria-label="Agendar pelo WhatsApp"
            >
              <span>Agendar</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-editorial-black-100 text-editorial-black-900 hover:bg-editorial-black-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-400',
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 border-t border-editorial-black-100 bg-white pb-6'
              : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href.replace('#', '')}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="nav-link-active"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-editorial-black-700 hover:text-champagne-600 transition-colors rounded-xl hover:bg-editorial-black-50 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full justify-center mt-4"
              aria-label="Agendar horário pelo WhatsApp"
            >
              <span>✨ Agendar Horário</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}