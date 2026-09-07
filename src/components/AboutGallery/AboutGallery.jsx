import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GalleryModal from './GalleryModal';

import styles from './AboutGallery.module.css';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  '/images/gallery/ab1.webp',
  '/images/gallery/ab2.jpg',
  '/images/gallery/ab3.webp',
  '/images/gallery/ab4.jpg',
  '/images/gallery/ab5.webp',
  '/images/gallery/ab6.jpg',
  '/images/gallery/ab7.jpg',
  '/images/gallery/ab8.jpg',
  '/images/gallery/ab9.webp',
  '/images/gallery/ab10.webp',
  '/images/gallery/ab11.jpg',
  '/images/gallery/ab12.jpg',
  '/images/gallery/ab13.jpg',
  '/images/gallery/ab14.jpg',
  '/images/gallery/ab15.jpg',
  '/images/gallery/ab16.jpg',
  '/images/gallery/ab17.jpg',
  '/images/gallery/ab18.jpg',
  '/images/gallery/ab19.jpg',
  '/images/gallery/ab20.webp',
];

const benefits = [
  'Qualifizierte Spezialisten',
  'Moderne Ausstattung für Werkstätten',
  'Qualität der Euromaster-Partner',
  'Faire Preise und Transparenz'
];

export default function AboutGallery() {
  const sectionRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) return;

    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [currentImg, isModalOpen]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo('.about-text-anim', 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );

    tl.fromTo('.about-gallery-anim', 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      "-=0.6"
    );
  }, { scope: sectionRef });

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % galleryImages.length);
  };
  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={styles.about}>
      <div className={styles.about__container}>
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div>
          <h2 className={`about-text-anim ${styles.about__title}`}>
            Über das Autohaus <br/><span className={styles['about__title-accent']}>in Baden</span>
          </h2>
          <p className={`about-text-anim ${styles.about__description}`}>
            Mit über 30 Jahren Erfahrung, insbesondere mit Fahrzeugen der Marken Jeep, Chrysler und Dodge, und modernster Ausstattung garantieren wir Ihnen Sicherheit und Komfort unterwegs. Wir verbinden traditionelle Handwerkskunst mit neuester Technologie.
          </p>
          <ul className={`about-text-anim ${styles.about__benefits}`}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.about__benefit}>
                <div className={styles['about__benefit-icon']}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                {benefit}
              </li>
            ))}
          </ul>
          <div className={`about-text-anim ${styles.about__reviews}`}>
            <div className={styles['about__reviews-avatar']}>AB</div>
            <div>
              <div className={styles['about__reviews-title']}>Unsere Bewertungen</div>
              <div className={styles['about__reviews-rating']}>
                <div className={styles.about__stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <span className={styles['about__rating-text']}>4,6 von 5 Sternen</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={`about-gallery-anim ${styles.about__gallery}`} 
          onClick={() => setIsModalOpen(true)}
        >
          <div className={styles['about__gallery-overlay']}>
            <div className={styles['about__zoom-icon']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </div>

          {galleryImages.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Gallery ${index}`}
              className={`${styles['about__gallery-image']} ${
                index === currentImg ? styles['about__gallery-image--active'] : ''}`}
            />
          ))}
          
          <div className={styles['about__gallery-controls']}>
            <button 
              onClick={prevImg} 
              className={styles['about__gallery-button']}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={nextImg}
              className={styles['about__gallery-button']}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <GalleryModal 
          images={galleryImages} 
          initialIndex={currentImg}
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
}