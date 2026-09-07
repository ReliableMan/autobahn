import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ServiceModal({ service, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const modalOverlayRef = useRef(null);
  const modalContentRef = useRef(null);
  const carouselImageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(modalOverlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(modalContentRef.current,
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }, []);

  const handleCloseModal = () => {
    gsap.to(modalOverlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.in' });
    gsap.to(modalContentRef.current, {
      opacity: 0, y: 16, scale: 0.98, duration: 0.2, ease: 'power2.in',
      onComplete: onClose
    });
  };

  const changeImage = (direction) => {
    if (!carouselImageRef.current) return;

    gsap.to(carouselImageRef.current, {
      opacity: 0,
      x: direction === 'next' ? -20 : 20,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        if (direction === 'next') {
          setCurrentImageIndex((prev) => (prev + 1) % service.gallery.length);
        } else {
          setCurrentImageIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);
        }

        gsap.fromTo(carouselImageRef.current,
          { opacity: 0, x: direction === 'next' ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    });
  };

  return (
    <div
      ref={modalOverlayRef}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/85 p-4 pt-16 backdrop-blur-md md:items-center md:pt-4"
      onClick={handleCloseModal}
      data-lenis-prevent="true"
    >
      <div
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl max-h-[80dvh]"
      >
        {/* Кнопка закрытия */}
        <button
          onClick={handleCloseModal}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all hover:border-[#c1f045] hover:bg-[#c1f045] hover:text-black"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Блок изображения */}
        <div className="relative h-[180px] w-full shrink-0 bg-black md:h-[220px]">
          <img
            ref={carouselImageRef}
            src={service.gallery[currentImageIndex] || undefined}
            alt={service.title}
            className="h-full w-full object-cover"
          />

          {service.gallery.length > 1 && (
            <>
              <button
                onClick={() => changeImage('prev')}
                className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all hover:border-[#c1f045] hover:bg-[#c1f045] hover:text-black"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={() => changeImage('next')}
                className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all hover:border-[#c1f045] hover:bg-[#c1f045] hover:text-black"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </>
          )}
        </div>

        {/* Текстовый блок */}
        <div
          className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-6 md:p-8 text-white"
          data-lenis-prevent="true"
        >
          <h3 className="text-xl font-bold leading-snug md:text-2xl">
            {service.title}
          </h3>
          
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            {service.fullDesc}
          </p>
          
          <a
            href="tel:+43225282000"
            className="mt-2 inline-flex shrink-0 self-start items-center gap-2 rounded-full bg-[#c1f045] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Um zu wissen
          </a>
        </div>
      </div>
    </div>
  );
}