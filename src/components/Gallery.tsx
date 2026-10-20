import { useState, useCallback } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Eye, Loader2 } from 'lucide-react';
import { cn } from '../utils';
import { GALLERY_IMAGES, SOCIAL_LINKS } from '../utils';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ triggerOnce: true });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  }, []);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  }, [selectedImage, closeLightbox]);

  const navigate = useCallback((direction: number) => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  }, [selectedImage]);

  return (
    <>
      <section
        id="transformacoes"
        className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        aria-labelledby="gallery-heading"
      >
        <div className="absolute inset-0 bg-editorial-black-950" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-champagne-900/20 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-luxury z-10">
          <div ref={headingRef} className={cn('text-center mb-12 lg:mb-16', headingVisible ? 'animate-slide-up' : 'opacity-0')}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-900/30 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-6 animate-fade-in border border-champagne-800">
              Galeria de Transformações
            </span>
            <h2
              id="gallery-heading"
              className="section-heading text-white"
            >
              Resultados que<br />falam por si
            </h2>
            <p className="section-subheading mt-6 text-editorial-black-300">
              Cada transformação conta uma história única de beleza, confiança e arte capilar.
            </p>
          </div>

          <div
            ref={gridRef}
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6',
              gridVisible ? '' : 'opacity-0'
            )}
            role="list"
            aria-label="Galeria de transformações capilares"
          >
            {GALLERY_IMAGES.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onLoad={handleImageLoad}
                onClick={openLightbox}
              />
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16" style={{ transitionDelay: '600ms' }}>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-champagne-400 text-champagne-300 font-medium text-base rounded-full hover:bg-champagne-400 hover:text-editorial-black-950 transition-all duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 focus-visible:ring-offset-editorial-black-950"
              aria-label="Ver mais transformações no Instagram"
            >
              <Image className="w-5 h-5" aria-hidden="true" />
              <span>Ver mais no Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNavigate={navigate}
          onKeyDown={handleKeyDown}
        />
      )}
    </>
  );
}

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  isVisible: boolean;
  onLoad: (id: number) => void;
  onClick: (image: GalleryImage) => void;
}

function GalleryItem({ image, index, onLoad, onClick }: GalleryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad(image.id);
  };

  return (
    <article
      className={cn(
        'cursor-pointer relative',
        'rounded-2xl overflow-hidden',
        'animate-slide-up'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => onClick(image)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(image)}
      tabIndex={0}
      role="listitem"
      aria-label={`${image.category}: ${image.alt}. Clique para ampliar.`}
    >
      <div className="image-frame">
        <img
          src={image.src}
          alt={image.alt}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={index < 4 ? "high" : "auto"}
          onLoad={handleLoad}
          onError={() => setIsLoaded(true)}
          className="transition-transform duration-700 hover:scale-105"
        />
      </div>
      {isLoaded && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-editorial-black-950/80 to-transparent">
          <span className="inline-block px-3 py-1 rounded-full bg-champagne-500/90 text-white text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      )}
    </article>
  );
}

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onNavigate: (direction: number) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

function Lightbox({ image, onClose, onNavigate, onKeyDown }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-editorial-black-950/98 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} - Imagem ampliada`}
      onClick={onClose}
      onKeyDown={onKeyDown}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 p-3 rounded-full bg-editorial-black-800/50 text-white hover:bg-editorial-black-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 z-10"
        aria-label="Fechar imagem ampliada"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
        className="absolute left-6 p-3 rounded-full bg-editorial-black-800/50 text-white hover:bg-editorial-black-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 z-10 hidden sm:flex"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
        className="absolute right-6 p-3 rounded-full bg-editorial-black-800/50 text-white hover:bg-editorial-black-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 z-10 hidden sm:flex"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl max-h-[85vh] w-full px-4">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-editorial-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-500/20 text-champagne-300 text-xs font-medium tracking-widest uppercase mb-3">
            {image.category}
          </span>
          <h3 className="font-display text-2xl font-medium text-white mb-2">{image.alt}</h3>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {GALLERY_IMAGES.map((img, index) => (
          <button
            key={img.id}
            onClick={(e) => { e.stopPropagation(); setSelectedImage(img); }}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              img.id === image.id
                ? 'bg-champagne-400 w-8'
                : 'bg-editorial-black-500 hover:bg-editorial-black-300'
            )}
            aria-label={`Ir para imagem ${index + 1}`}
            aria-current={img.id === image.id ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}