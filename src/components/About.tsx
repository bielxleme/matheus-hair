import { Award, Heart, Sparkles, Target, CheckCircle, Scissors } from 'lucide-react';
import { cn } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

const VALUES = [
  {
    icon: Heart,
    title: 'Cuidado Exclusivo',
    description: 'Cada cliente recebe atenção personalizada, com diagnóstico capilar completo e plano de tratamento sob medida.',
  },
  {
    icon: Award,
    title: 'Excelência Técnica',
    description: 'Técnicas avançadas e atualização constante nas maiores academias nacionais e internacionais de beleza.',
  },
  {
    icon: Target,
    title: 'Visagismo Preciso',
    description: 'Análise facial detalhada para criar o corte e cor perfeitos que harmonizam com sua identidade única.',
  },
  {
    icon: Sparkles,
    title: 'Produtos Premium',
    description: 'Apenas as melhores marcas profissionais do mercado, garantindo saúde, brilho e durabilidade dos resultados.',
  },
];

const DIFFERENTIALS = [
  'Diagnóstico capilar digital com tricoscopia',
  'Colorimetria personalizada com tinturas importadas',
  'Técnicas de mechas sem danos (bond builder)',
  'Tratamentos de reconstrução molecular',
  'Penteados para noivas e eventos com prova',
  'Ambiente climatizado e acolhedor',
  'Estacionamento privativo para clientes',
  'Agendamento online via WhatsApp',
];

export function About() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ triggerOnce: true });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -150px 0px' });
  const { ref: diffsRef, isVisible: diffsVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -200px 0px' });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -50px 0px' });

  return (
    <section
      id="sobre"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-off-white-50 via-white to-off-white-50" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-champagne-100/30 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-luxury z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div ref={imageRef} className={cn('relative', imageVisible ? 'animate-slide-right' : 'opacity-0')}>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-editorial-lg">
              <img
                src="/profile/profile-1.jpg"
                alt="Matheus - Especialista em transformação capilar"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-editorial-black-950/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-champagne flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Scissors className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="font-display text-xl font-medium">Matheus</p>
                    <p className="font-sans text-sm text-champagne-200">Especialista em Transformação Capilar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-champagne shadow-champagne-lg flex items-center justify-center" aria-hidden="true">
              <Scissors className="w-10 h-10 text-white" />
            </div>
          </div>

          <div ref={headingRef} className={cn('lg:pr-8', headingVisible ? 'animate-slide-left' : 'opacity-0')}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-700 text-xs font-medium tracking-widest uppercase mb-6 animate-fade-in">
              Sobre o Matheus Hair
            </span>
            <h2
              id="about-heading"
              className="section-heading gradient-text mb-6"
            >
              Onde a arte<br />encontra a técnica
            </h2>
            <div className="space-y-4 text-editorial-black-500 font-sans leading-relaxed">
              <p className={cn('animate-slide-up stagger-1', contentVisible ? '' : 'opacity-0')}>
                Fundado com a visão de transformar o cuidado capilar em uma experiência de luxo acessível, o Matheus Hair nasceu da paixão pela arte da beleza e da busca incansável pela excelência técnica.
              </p>
              <p className={cn('animate-slide-up stagger-2', contentVisible ? '' : 'opacity-0')}>
                Localizado no coração de Borborema, nosso salão foi projetado para ser um refúgio de sofisticação e bem-estar, onde cada detalhe — da iluminação aos produtos — foi pensado para proporcionar o melhor resultado para seus cabelos.
              </p>
              <p className={cn('animate-slide-up stagger-3', contentVisible ? '' : 'opacity-0')}>
                Acreditamos que seu cabelo é sua coroa diária. Por isso, unimos visagismo de precisão, colorimetria avançada e tratamentos de vanguarda para revelar sua melhor versão.
              </p>
            </div>
          </div>
        </div>

        <div ref={valuesRef} className={cn('mt-16 lg:mt-24 space-y-6', valuesVisible ? '' : 'opacity-0')}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  'card-luxury p-6 flex gap-4',
                  'animate-slide-up stagger-1'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-champagne flex items-center justify-center" aria-hidden="true">
                  <value.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-champagne-300 rounded-full opacity-20 blur-xl" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-editorial-black-950 mb-2">{value.title}</h3>
                  <p className="font-sans text-editorial-black-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={cn('mt-12 pt-8 border-t border-editorial-black-100 animate-slide-up stagger-5', diffsVisible ? '' : 'opacity-0')}>
            <h3 className="font-display text-xl font-medium text-editorial-black-950 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-champagne-500" aria-hidden="true" />
              Nossos Diferenciais
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {DIFFERENTIALS.map((diff, index) => (
                <div key={diff} className="flex items-center gap-3 text-editorial-black-600 font-sans text-sm">
                  <CheckCircle className="w-5 h-5 text-champagne-500 flex-shrink-0" aria-hidden="true" />
                  <span>{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}