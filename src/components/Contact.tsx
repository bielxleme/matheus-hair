import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation2, CheckCircle, Globe, Users, ChevronRight } from 'lucide-react';
import { cn } from '../utils';
import { SOCIAL_LINKS, WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppUrl } from '../utils';

export function Contact() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ triggerOnce: true });
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });
  const { ref: socialRef, isVisible: socialVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -150px 0px' });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });

  const CONTACT_INFO = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Borborema - SP', 'Brasil'],
      href: 'https://maps.google.com/?q=Borborema+SP',
      ariaLabel: 'Abrir localização no Google Maps',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      details: ['(16) 99712-4057', 'Atendimento e agendamentos'],
      href: whatsappUrl,
      ariaLabel: 'Abrir WhatsApp para agendamento',
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@matheushair.com.br', 'Dúvidas e sugestões'],
      href: 'mailto:contato@matheushair.com.br',
      ariaLabel: 'Enviar e-mail',
    },
    {
      icon: Clock,
      title: 'Horários',
      details: ['Terça a Sábado: 9h às 20h', 'Domingo e Segunda: Fechado'],
      href: null,
      ariaLabel: null,
    },
  ];

  return (
    <section
      id="contato"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-editorial-black-950" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-champagne-900/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-champagne-800/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-luxury z-10">
        <div ref={headingRef} className={cn('text-center mb-12 lg:mb-16', headingVisible ? 'animate-slide-up' : 'opacity-0')}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-900/30 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-6 animate-fade-in border border-champagne-800">
            Agende seu Horário
          </span>
          <h2
            id="contact-heading"
            className="section-heading text-white"
          >
            Vamos transformar<br />seu visual?
          </h2>
          <p className="section-subheading mt-6 text-editorial-black-300">
            Estamos prontos para criar a sua melhor versão. Escolha a melhor forma de entrar em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div ref={infoRef} className={cn('lg:col-span-2 space-y-6', infoVisible ? 'animate-slide-up stagger-1' : 'opacity-0')}>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {CONTACT_INFO.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href || '#'}
                  target={item.href ? '_blank' : undefined}
                  rel={item.href ? 'noopener noreferrer' : undefined}
                  onClick={(e) => { if (!item.href) e.preventDefault(); }}
                  className={cn(
                    'card-luxury p-6 group',
                    'animate-slide-up stagger-1'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={item.ariaLabel || `Informações de ${item.title}`}
                >
                  <div className="relative w-12 h-12 rounded-xl bg-editorial-black-800 flex items-center justify-center mb-4 group-hover:bg-champagne-600 transition-colors duration-300" aria-hidden="true">
                    <item.icon className="w-6 h-6 text-champagne-300 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-white mb-2 group-hover:font-bold group-hover:text-champagne-200 transition-all duration-300">{item.title}</h3>
                  <div className="space-y-1 text-champagne-100 font-sans text-sm leading-relaxed">
                    {item.details.map((detail, i) => (
                      <p key={i} className={i === 0 ? 'font-medium text-champagne-200 group-hover:font-semibold group-hover:text-champagne-50 transition-all duration-300' : 'group-hover:text-champagne-200 transition-colors duration-300'}>{detail}</p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="card-luxury p-6 border-champagne-800 bg-editorial-black-900/50 animate-slide-up stagger-2 group" style={{ transitionDelay: '400ms' }}>
              <h3 className="font-display text-xl font-medium text-white mb-4 flex items-center gap-2 group-hover:font-bold group-hover:text-champagne-200 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-champagne-400 group-hover:text-champagne-200 transition-colors duration-300" aria-hidden="true" />
                Agendamento Rápido
              </h3>
              <p className="text-champagne-100 font-sans text-sm mb-6 leading-relaxed group-hover:font-semibold group-hover:text-champagne-50 transition-all duration-300">
                Clique no botão abaixo e converse diretamente com nossa equipe pelo WhatsApp. Respostas em poucos minutos!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto justify-center gap-3 group"
                aria-label="Agendar horário pelo WhatsApp agora"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <span>💬 Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div ref={socialRef} className={cn('card-luxury p-6 space-y-4', socialVisible ? 'animate-slide-up stagger-1' : 'opacity-0')}>
              <h3 className="font-display text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Navigation2 className="w-6 h-6 text-champagne-400" aria-hidden="true" />
                Siga-nos
              </h3>
              <p className="text-champagne-100 font-sans text-sm leading-relaxed">
                Acompanhe nossas transformações diárias, dicas de cuidados e novidades.
              </p>
              <div className="flex flex-col gap-3 pt-4 border-t border-editorial-black-800">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-editorial-black-800/50 hover:bg-champagne-900/30 transition-all duration-300 group cursor-pointer"
                  aria-label="Seguir no Instagram"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-sans font-medium text-white group-hover:font-bold group-hover:text-champagne-200 transition-all duration-300">Instagram</p>
                    <p className="font-sans text-xs text-champagne-200 group-hover:text-champagne-100 transition-colors duration-300">@matheus_hair</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-champagne-300 group-hover:text-champagne-400 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-editorial-black-800/50 hover:bg-blue-900/30 transition-all duration-300 group cursor-pointer"
                  aria-label="Seguir no Facebook"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-sans font-medium text-white group-hover:font-bold group-hover:text-champagne-200 transition-all duration-300">Facebook</p>
                    <p className="font-sans text-xs text-champagne-200 group-hover:text-champagne-100 transition-colors duration-300">Matheus Hair</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-champagne-300 group-hover:text-champagne-400 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div ref={ctaRef} className={cn('card-luxury p-6 bg-gradient-to-br from-champagne-900/30 to-champagne-800/20 border-champagne-800 text-center group', ctaVisible ? 'animate-scale-in stagger-2' : 'opacity-0')} style={{ transitionDelay: '300ms' }}>
              <h3 className="font-display text-xl font-medium text-white mb-3 group-hover:font-bold group-hover:text-champagne-200 transition-all duration-300">Prefere ligar?</h3>
              <p className="text-champagne-100 font-sans text-sm mb-6 group-hover:font-semibold group-hover:text-champagne-50 transition-all duration-300">Nossa equipe está pronta para atender você</p>
              <a
                href="tel:+5516997124057"
                className="inline-flex items-center gap-2 text-champagne-300 font-sans font-medium hover:text-champagne-100 hover:font-bold transition-all duration-300"
                aria-label="Ligar para (16) 99712-4057"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>(16) 99712-4057</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}