import { useState, useEffect } from 'react';
import { MessageSquare, X, CheckCircle, Clock, MapPin } from 'lucide-react';
import { cn } from '../utils';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';
import { getWhatsAppUrl } from '../utils';
import { useReducedMotion } from '../hooks/useScrollReveal';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  const quickActions = [
    {
      label: 'Agendar Horário',
      message: 'Olá! Gostaria de agendar um horário no Matheus Hair. Quais são os horários disponíveis?',
      icon: Clock,
    },
    {
      label: 'Orçamento Coloração',
      message: 'Olá! Gostaria de saber sobre valores e técnicas de coloração/mechas.',
      icon: MapPin,
    },
    {
      label: 'Dúvidas Gerais',
      message: 'Olá! Tenho uma dúvida sobre os serviços do Matheus Hair.',
      icon: CheckCircle,
    },
  ];

  const handleQuickAction = (message: string) => {
    const url = `https://wa.me/55${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full',
          'bg-gradient-champagne text-white flex items-center justify-center',
          'shadow-champagne-lg hover:shadow-[0_0_0_4px_rgba(212,160,114,0.4),_0_20px_60px_-15px_rgba(212,160,114,0.5)]',
          'transition-all duration-400',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          isOpen && 'rotate-45 bg-champagne-600',
          !isVisible && 'opacity-0 invisible scale-0 pointer-events-none'
        )}
        aria-expanded={isOpen}
        aria-controls="whatsapp-menu"
        aria-label={isOpen ? 'Fechar opções do WhatsApp' : 'Abrir WhatsApp para agendamento'}
        type="button"
      >
        <MessageSquare className={cn('w-7 h-7 sm:w-8 sm:h-8 transition-transform', isOpen && 'rotate-[-45deg]')} aria-hidden="true" />
        {!isOpen && !reducedMotion && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce" aria-hidden="true">
            1
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="whatsapp-menu"
            role="menu"
            aria-label="Opções de contato via WhatsApp"
            className={cn(
              'fixed bottom-6 right-6 z-50 w-72 bg-white rounded-2xl shadow-editorial-lg border border-editorial-black-100 overflow-hidden',
              'flex flex-col',
              reducedMotion ? '' : 'animate-scale-in'
            )}
          >
            <div className="p-4 bg-gradient-champagne text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center" aria-hidden="true">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-medium">Matheus Hair</p>
                  <p className="text-xs text-champagne-100">Atendimento via WhatsApp</p>
                </div>
              </div>
              <p className="text-xs text-champagne-100/80">Respondemos em poucos minutos</p>
            </div>

            <div className="p-3 space-y-2" role="list">
              {quickActions.map((action, index) => (
                <button
                  key={action.label}
                  onClick={() => handleQuickAction(action.message)}
                  role="menuitem"
                  className={cn(
                    'w-full flex items-center gap-3 p-3 rounded-xl',
                    'text-left text-editorial-black-700 font-sans text-sm font-medium',
                    'hover:bg-champagne-50 transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2'
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <action.icon className="w-5 h-5 text-champagne-500 flex-shrink-0" aria-hidden="true" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>

            <div className="px-4 py-3 border-t border-editorial-black-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl font-sans font-medium text-sm hover:bg-green-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Agendar</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}