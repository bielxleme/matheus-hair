import { ArrowRight, MessageSquare, Scissors, Sparkles } from 'lucide-react';
import { cn } from '../utils';
import { getWhatsAppUrl, WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Hero() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ triggerOnce: true });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -150px 0px' });
  const { ref: scrollRef, isVisible: scrollVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-off-white-50 via-off-white-100 to-off-white-50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne-100/30 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: 'url(/hero/hero-bg.jpg)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-champagne-200/20 rounded-full blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-champagne-300/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="relative container-luxury z-10 pb-20 lg:pb-28">
        <div className="text-center max-w-5xl mx-auto px-4">
          <div ref={titleRef} className={cn('mb-8', titleVisible ? 'animate-slide-up' : 'opacity-0')}>
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-editorial-black-950 leading-tight text-balance"
              style={{ animationDelay: titleVisible ? '0ms' : '0ms' }}
            >
              <span className="text-reveal block">A sua melhor versão</span>
              <span className="text-reveal block gradient-text" style={{ animationDelay: '150ms' }}>em evidência.</span>
            </h1>
          </div>

          <div ref={subtitleRef} className={cn('mb-12', subtitleVisible ? 'animate-slide-up stagger-1' : 'opacity-0')}>
            <p className="font-sans text-lg sm:text-xl lg:text-2xl text-editorial-black-500 font-light tracking-wide max-w-3xl mx-auto leading-relaxed text-balance">
              Especialista em cortes, colorimetria e transformação capilar de alto padrão em Borborema.
            </p>
          </div>

          <div ref={ctaRef} className={cn('flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16', ctaVisible ? 'animate-slide-up stagger-2' : 'opacity-0')}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('btn-primary w-full sm:w-auto gap-3', 'group')}
              aria-label="Agendar horário pelo WhatsApp"
            >
              <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span>💬 Agendar pelo WhatsApp</span>
            </a>
            <a
              href="#especialidades"
              className={cn('btn-secondary w-full sm:w-auto gap-3', 'group')}
              aria-label="Conhecer nossos serviços"
            >
              <Scissors className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span>✂️ Conhecer Serviços</span>
            </a>
          </div>

          <div ref={scrollRef} className={cn('mt-16 lg:mt-20', scrollVisible ? 'animate-float' : 'opacity-0')}>
            <div className="flex flex-col items-center gap-2 text-editorial-black-400 hover:text-champagne-600 transition-colors duration-300 cursor-pointer" aria-label="Rolar para ver mais">
              <span className="font-sans text-xs tracking-widest uppercase">Descubra mais</span>
              <ArrowRight className="w-6 h-6 animate-bounce" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-editorial-black-300 font-sans text-xs tracking-widest uppercase hidden lg:flex" aria-hidden="true">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-champagne-500" />
            <span>Visagismo Personalizado</span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-champagne-300 to-transparent" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-champagne-500" />
            <span>Colorimetria Avançada</span>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-champagne-300 to-transparent" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-champagne-500" />
            <span>Tratamentos Exclusivos</span>
          </div>
        </div>
      </div>
    </section>
  );
}