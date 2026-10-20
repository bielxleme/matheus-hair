import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const baseUrl = `https://wa.me/55${cleaned}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export const WHATSAPP_PHONE = '16997124057';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um horário no Matheus Hair.';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/matheushair.mh',
  facebook: 'https://www.facebook.com/matheushair.mh/',
};

export const SERVICES = [
  {
    id: 1,
    title: 'Coloração & Mechas',
    description: 'Técnicas modernas e preservação da saúde dos fios',
    icon: 'palette',
    gradient: 'from-champagne-400 to-champagne-600',
    image: '/gallery/gallery-1.jpg',
  },
  {
    id: 2,
    title: 'Cortes & Visagismo',
    description: 'Análise de formato de rosto e estilo pessoal',
    icon: 'scissors',
    gradient: 'from-champagne-500 to-champagne-700',
    image: '/gallery/gallery-5.jpg',
  },
  {
    id: 3,
    title: 'Tratamentos Capilares',
    description: 'Hidratações profundas, reconstrução e nutrição',
    icon: 'sparkles',
    gradient: 'from-champagne-300 to-champagne-500',
    image: '/gallery/gallery-10.jpg',
  },
  {
    id: 4,
    title: 'Produções & Penteados',
    description: 'Eventos, noivas e ocasiões especiais',
    icon: 'crown',
    gradient: 'from-champagne-600 to-champagne-800',
    image: '/gallery/gallery-4.jpg',
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: '/gallery/gallery-1.jpg', alt: 'Transformação loiro platinado', category: 'Coloração' },
  { id: 2, src: '/gallery/gallery-2.jpg', alt: 'Corte bob moderno', category: 'Corte' },
  { id: 3, src: '/gallery/gallery-3.jpg', alt: 'Mechas balayage', category: 'Mechas' },
  { id: 4, src: '/gallery/gallery-4.jpg', alt: 'Penteado noiva', category: 'Penteado' },
  { id: 5, src: '/gallery/gallery-5.jpg', alt: 'Corte feminino longo', category: 'Corte' },
  { id: 6, src: '/gallery/gallery-6.jpg', alt: 'Corte em camadas', category: 'Corte' },
  { id: 7, src: '/gallery/gallery-7.jpg', alt: 'Corte masculino texturizado', category: 'Corte' },
  { id: 8, src: '/gallery/gallery-8.jpg', alt: 'Barba e corte masculino', category: 'Corte' },
  { id: 9, src: '/gallery/gallery-9.jpg', alt: 'Corte masculino clássico', category: 'Corte' },
  { id: 10, src: '/gallery/gallery-10.jpg', alt: 'Tratamento hidratação profunda', category: 'Tratamento' },
  { id: 11, src: '/gallery/gallery-11.jpg', alt: 'Tratamento reconstrução', category: 'Tratamento' },
  { id: 12, src: '/gallery/gallery-12.jpg', alt: 'Tratamento nutrição', category: 'Tratamento' },
  { id: 13, src: '/gallery/gallery-13.jpg', alt: 'Produção especial evento', category: 'Penteado' },
  { id: 14, src: '/gallery/gallery-14.jpg', alt: 'Penteado formatura', category: 'Penteado' },
  { id: 15, src: '/gallery/gallery-15.jpg', alt: 'Penteado noiva', category: 'Penteado' },
  { id: 16, src: '/gallery/gallery-16.jpg', alt: 'Finalização especial', category: 'Penteado' },
  { id: 17, src: '/gallery/gallery-17.jpg', alt: 'Coloração vibrante', category: 'Coloração' },
  { id: 18, src: '/gallery/gallery-18.jpg', alt: 'Mechas sofisticadas', category: 'Mechas' },
];

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#transformacoes', label: 'Transformações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];