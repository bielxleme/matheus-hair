import { Scissors, Globe, Users, MessageSquare, Heart, Sparkles } from 'lucide-react';
import { cn } from '../utils';
import { SOCIAL_LINKS, WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';
import { getWhatsAppUrl } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Footer() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  const { ref: footerRef, isVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -50px 0px' });

  const FOOTER_LINKS = {
    servicos: [
      { label: 'Coloração & Mechas', href: '#especialidades' },
      { label: 'Cortes & Visagismo', href: '#especialidades' },
      { label: 'Tratamentos Capilares', href: '#especialidades' },
      { label: 'Produções & Penteados', href: '#especialidades' },
    ],
    empresa: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Nossa Equipe', href: '#sobre' },
      { label: 'Galeria', href: '#transformacoes' },
      { label: 'Blog & Dicas', href: '#' },
    ],
    suporte: [
      { label: 'Agendar Horário', href: whatsappUrl, external: true },
      { label: 'Fale Conosco', href: '#contato' },
      { label: 'Perguntas Frequentes', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
    ],
  };

  return (
    <footer
      ref={footerRef}
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        isVisible ? 'animate-fade-in' : 'opacity-0'
      )}
      role="contentinfo"
      aria-label="Rodapé"
    >
      <div className="absolute inset-0 bg-editorial-black-950" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-champagne-900/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-champagne-800/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-luxury z-10">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-champagne flex items-center justify-center" aria-hidden="true">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-2xl font-medium text-white">Matheus Hair</span>
            </div>
            <p className="font-sans text-editorial-black-400 text-base leading-relaxed max-w-xs">
              Especialista em cortes, colorimetria e transformação capilar de alto padrão.
              Revelamos sua melhor versão com arte, técnica e cuidado exclusivo.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-editorial-black-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 py-3 gap-2 group"
                aria-label="Agendar pelo WhatsApp"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span className="hidden sm:inline">Agendar</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full border-2 border-editorial-black-700 text-editorial-black-300 font-sans font-medium text-sm hover:border-champagne-500 hover:text-champagne-300 transition-all duration-300"
                aria-label="Seguir no Instagram"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
                <span className="hidden sm:inline">@matheus_hair</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium text-white">Serviços</h4>
            <nav aria-label="Links de serviços">
              <ul className="space-y-3" role="list">
                {FOOTER_LINKS.servicos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-editorial-black-400 hover:text-champagne-300 transition-colors duration-300 text-sm"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-lg font-medium text-white">Empresa</h4>
            <nav aria-label="Links da empresa">
              <ul className="space-y-3" role="list">
                {FOOTER_LINKS.empresa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-editorial-black-400 hover:text-champagne-300 transition-colors duration-300 text-sm"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-editorial-black-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <p className="font-sans text-editorial-black-500 text-sm">
                © {new Date().getFullYear()} Matheus Hair. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-editorial-black-500 text-sm">
                <Heart className="w-4 h-4 text-champagne-500" aria-hidden="true" />
                <span>Feito com cuidado em Borborema - SP</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-editorial-black-800 flex items-center justify-center text-editorial-black-400 hover:bg-champagne-600 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"
                aria-label="Instagram"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-editorial-black-800 flex items-center justify-center text-editorial-black-400 hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Facebook"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne-500 to-transparent opacity-50" aria-hidden="true" />
      </div>
    </footer>
  );
}