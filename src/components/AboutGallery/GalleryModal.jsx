import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function GalleryModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  const isAnimating = useRef(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      changeImage('next');
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useGSAP(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: onClose
    });
  };

  const changeImage = (direction, e) => {
    if (e) e.stopPropagation();
    if (isAnimating.current) return;

    isAnimating.current = true;

    gsap.to(imageRef.current, {
      opacity: 0,
      x: direction === 'next' ? -40 : 40,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        if (direction === 'next') {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }

        gsap.fromTo(imageRef.current,
          { opacity: 0, x: direction === 'next' ? 40 : -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => { isAnimating.current = false; }
          }
        );
      }
    });
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/95 p-4 pt-16 backdrop-blur-md md:items-center md:pt-4"
    >
      <button
        onClick={handleClose}
        className="fixed right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#c1f045] hover:text-black md:right-8 md:top-8 md:h-12 md:w-12"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-col items-center gap-4"
      >
        <div className="relative flex w-full items-center justify-center">
          <img
            ref={imageRef}
            src={images[currentIndex] || undefined}
            alt={`Full Gallery ${currentIndex}`}
            className="max-h-[70dvh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />

          <button
            onClick={(e) => changeImage('prev', e)}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#c1f045] hover:text-black md:left-4 md:h-14 md:w-14"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button
            onClick={(e) => changeImage('next', e)}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#c1f045] hover:text-black md:right-4 md:h-14 md:w-14"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="text-sm tracking-[0.2em] text-gray-400">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}