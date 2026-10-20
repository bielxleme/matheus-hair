import { Palette, Scissors, Sparkles, Crown, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils';
import { SERVICES, WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';
import { getWhatsAppUrl } from '../utils';

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
  isVisible: boolean;
  delay: number;
}

function ServiceCard({ service, index, isVisible, delay }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const iconComponents = {
    palette: Palette,
    scissors: Scissors,
    sparkles: Sparkles,
    crown: Crown,
  };

  const Icon = iconComponents[service.icon as keyof typeof iconComponents] || Sparkles;

  return (
    <article
      className={cn(
        'card-luxury group relative flex flex-col h-full overflow-hidden',
        'perspective-1000 transform-style-3d',
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="article"
      aria-label={service.title}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-editorial-black-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        <div className="absolute top-4 left-4">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm',
            'transition-all duration-500 group-hover:scale-110 group-hover:rotate-3',
            service.gradient
          )} aria-hidden="true">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-1">
        <div className="absolute -top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-champagne flex items-center justify-center shadow-champagne" aria-hidden="true">
          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>

        <h3 className="relative z-10 font-display text-xl sm:text-2xl font-medium text-editorial-black-950 mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="relative z-10 font-sans text-editorial-black-500 text-base sm:text-lg leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <div className="relative z-10 pt-4 border-t border-editorial-black-100 group-hover:border-champagne-200 transition-colors duration-300">
          <button
            className="w-full flex items-center justify-center gap-2 text-champagne-600 font-medium text-sm tracking-wide hover:gap-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label={`Saiba mais sobre ${service.title}`}
          >
            <span>Saiba mais</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ triggerOnce: true });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });

  return (
    <section
      id="especialidades"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-off-white-50 via-white to-off-white-50" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-champagne-100/30 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-luxury z-10">
        <div ref={headingRef} className={cn('text-center mb-12 lg:mb-16', headingVisible ? 'animate-slide-up' : 'opacity-0')}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-700 text-xs font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Nossas Especialidades
          </span>
          <h2
            id="services-heading"
            className="section-heading gradient-text"
          >
            Arte e técnica<br />em cada detalhe
          </h2>
          <p className="section-subheading mt-6">
            Serviços exclusivos desenvolvidos para realçar sua beleza natural com técnicas de vanguarda e produtos premium.
          </p>
        </div>

        <div ref={gridRef} className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8', gridVisible ? '' : 'opacity-0')}>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={gridVisible}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16" style={{ transitionDelay: '600ms' }}>
          <a
            href={getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex gap-3 group"
            aria-label="Agendar seu serviço pelo WhatsApp"
          >
            <span>Agendar seu horário</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}